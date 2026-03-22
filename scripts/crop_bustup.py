from PIL import Image

base = '/home/ubuntu/sml/public/images/doctors'

# バストアップトリミング設定
# (ファイル名, オリジナルファイル, 出力ファイル, top_ratio, bottom_ratio)
# top_ratio: 上から何%から開始するか（頭上の余白を少し残す）
# bottom_ratio: 上から何%まで含めるか（バスト下端）
crops = [
    # yamamoto: 1525x3302 → バスト下端は約y=1700（全体の51%）
    ('yamamoto', 'yamamoto_original.png', 'yamamoto.png', 0.0, 0.52),
    # harima: 1500x2000 → バスト下端は約y=1200（全体の60%）
    ('harima', 'harima_original.png', 'harima.png', 0.0, 0.62),
    # shida: 1400x1800 → バスト下端は約y=1200（全体の67%）
    ('shida', 'shida_original.png', 'shida.png', 0.0, 0.68),
    # ohashi: 581x885 → バスト下端は約y=620（全体の70%）
    ('ohashi', 'ohashi_original.webp', 'ohashi.webp', 0.0, 0.72),
]

for name, src, dst, top_r, bot_r in crops:
    img = Image.open(f'{base}/{src}')
    w, h = img.size
    top = int(h * top_r)
    bottom = int(h * bot_r)
    cropped = img.crop((0, top, w, bottom))
    new_w, new_h = cropped.size
    ratio = new_w / new_h
    print(f'{name}: {w}x{h} → {new_w}x{new_h} (ratio={ratio:.2f})')
    cropped.save(f'{base}/{dst}')

print('Done!')
