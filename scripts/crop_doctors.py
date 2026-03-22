"""
各医師写真を横長にトリミングするスクリプト
堀田先生（1409×1055, ratio=1.34）に合わせる

スマホ表示では上部（顔）が重要なので、顔が確実に含まれるようにトリミング
"""
from PIL import Image
import os

BASE = '/home/ubuntu/sml/public/images/doctors'

# 各写真のトリミング設定
# (ファイル名, top_ratio, bottom_ratio)
crops = [
    # yamamoto: 1525×3302, ratio=0.46
    # 上から40% → 1525×1320 ratio=1.16（顔〜胸まで）
    ('yamamoto.png', 0.0, 0.40),

    # harima: 1500×2000, ratio=0.75
    # 上から55% → 1500×1100 ratio=1.36（顔〜腰まで）
    ('harima.png', 0.0, 0.55),

    # shida: 1400×1800, ratio=0.78
    # 上から55% → 1400×990 ratio=1.41（顔〜腰まで）
    ('shida.png', 0.0, 0.55),

    # ohashi: 581×885, ratio=0.66
    # 上から50% → 581×442 ratio=1.31（顔〜胸まで）
    ('ohashi.webp', 0.0, 0.50),
]

for fname, top_r, bottom_r in crops:
    in_path = os.path.join(BASE, fname)
    
    # バックアップ（まだなければ）
    ext = fname.rsplit('.', 1)[1]
    backup_path = os.path.join(BASE, fname.replace(f'.{ext}', f'_original.{ext}'))
    if not os.path.exists(backup_path):
        img_orig = Image.open(in_path)
        img_orig.save(backup_path)
        print(f'Backed up: {backup_path}')
    
    img = Image.open(in_path)
    w, h = img.size
    
    top = int(h * top_r)
    bottom = int(h * bottom_r)
    
    # クロップ: (left, upper, right, lower)
    cropped = img.crop((0, top, w, bottom))
    new_w, new_h = cropped.size
    ratio = new_w / new_h
    
    print(f'{fname}: {w}×{h} → {new_w}×{new_h} (ratio={ratio:.2f})')
    
    # 保存（元のファイルを上書き）
    if fname.endswith('.webp'):
        cropped.save(in_path, 'WEBP', quality=95)
    else:
        cropped.save(in_path, 'PNG')
    
    print(f'  Saved: {in_path}')

print('\nDone!')
