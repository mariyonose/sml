from rembg import remove
from PIL import Image
import io

input_path = '/home/ubuntu/sml/public/images/doctors/horita.png'
output_path = '/home/ubuntu/sml/public/images/doctors/horita_white.png'

# 元画像を読み込む
with open(input_path, 'rb') as f:
    input_data = f.read()

# 背景除去
output_data = remove(input_data)

# 白背景と合成
fg = Image.open(io.BytesIO(output_data)).convert('RGBA')
white_bg = Image.new('RGBA', fg.size, (255, 255, 255, 255))
white_bg.paste(fg, mask=fg.split()[3])
result = white_bg.convert('RGB')

result.save(output_path, 'PNG')
print(f'Saved: {output_path}')
print(f'Size: {result.size}')
