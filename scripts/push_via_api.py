"""
gh api経由でファイルをGitHubにアップロードするスクリプト
git pushの代替手段
"""
import subprocess
import base64
import json
import os
import sys

REPO = 'mariyonose/sml'
BRANCH = 'main'

def run_gh(args, input_data=None):
    cmd = ['gh', 'api'] + args
    result = subprocess.run(cmd, capture_output=True, text=True, input=input_data)
    if result.returncode != 0:
        print(f'Error: {result.stderr}', file=sys.stderr)
        return None
    return json.loads(result.stdout) if result.stdout else None

def get_file_sha(path):
    """GitHubのファイルSHAを取得"""
    result = run_gh([f'/repos/{REPO}/contents/{path}', '--jq', '.sha'])
    return result

def upload_file(local_path, repo_path, message):
    """ファイルをGitHub APIでアップロード"""
    with open(local_path, 'rb') as f:
        content = base64.b64encode(f.read()).decode('utf-8')
    
    # 既存ファイルのSHAを取得
    sha_result = subprocess.run(
        ['gh', 'api', f'/repos/{REPO}/contents/{repo_path}', '--jq', '.sha'],
        capture_output=True, text=True
    )
    
    data = {
        'message': message,
        'content': content,
        'branch': BRANCH
    }
    
    if sha_result.returncode == 0 and sha_result.stdout.strip():
        data['sha'] = sha_result.stdout.strip().strip('"')
    
    # PUT request
    result = subprocess.run(
        ['gh', 'api', '--method', 'PUT', f'/repos/{REPO}/contents/{repo_path}',
         '--input', '-'],
        capture_output=True, text=True,
        input=json.dumps(data)
    )
    
    if result.returncode == 0:
        print(f'✓ Uploaded: {repo_path}')
        return True
    else:
        print(f'✗ Failed: {repo_path}: {result.stderr[:200]}')
        return False

# 変更されたファイルのリスト（origin/mainとの差分）
changed_files = [
    '.gitignore',
    'pages/Home.tsx',
    'public/images/doctors/harima.png',
    'public/images/doctors/horita.png',
    'public/images/doctors/ohashi.webp',
    'public/images/doctors/shida.png',
    'public/images/doctors/yamamoto.png',
    'scripts/crop_doctors.py',
    'scripts/remove_bg_horita.py',
    # 以前のコミットで変更されたファイル
    'components/ScrollReveal.tsx',
    'components/TargetMessage.tsx',
    'data.ts',
    'pages/Agents.tsx',
    'public/images/targets/agents.jpg',
    'public/images/targets/clinics.jpg',
    'public/images/targets/patients.jpg',
    'vite.config.ts',
]

os.chdir('/home/ubuntu/sml')

success = 0
fail = 0

for f in changed_files:
    if os.path.exists(f):
        ok = upload_file(f, f, f'chore: update {f}')
        if ok:
            success += 1
        else:
            fail += 1
    else:
        print(f'Skip (not found): {f}')

print(f'\nDone: {success} uploaded, {fail} failed')
