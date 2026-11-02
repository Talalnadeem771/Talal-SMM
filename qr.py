# pip install "qrcode[pil]"
import qrcode

link = "https://talalnadeem771.github.io/Talal-SMM/"   # put your link here

qr = qrcode.QRCode(
    version=None,                                   # auto-size
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # high error correction
    box_size=12,                                    # pixels per square
    border=4,                                       # quiet zone (keep at 4 or more)
)
qr.add_data(link)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("qrcode.png")
print("Saved qrcode.png")