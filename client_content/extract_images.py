import os
from pypdf import PdfReader

pdf_dir = "c:/Users/Asif/Music/GitHub/GreenAhom Exp/client_content"
output_dir = "c:/Users/Asif/Music/GitHub/GreenAhom Exp/public/extracted_images"
os.makedirs(output_dir, exist_ok=True)

pdfs = [
    "Altered AOA OF GREEN AHOM.pdf",
    "Altered INC-13 MOA OF GREEN AHOM.pdf",
    "ANNUAL REPORT 23-24.pdf",
    "ANNUAL REPORT 2022-23.pdf",
    "ANNUAL REPORT 2024-2025.pdf"
]

print("Starting image extraction...")
total_extracted = 0

for pdf_name in pdfs:
    pdf_path = os.path.join(pdf_dir, pdf_name)
    if not os.path.exists(pdf_path):
        print(f"Not found: {pdf_path}")
        continue
    
    print(f"\nProcessing {pdf_name}...")
    try:
        reader = PdfReader(pdf_path)
        pdf_extracted = 0
        for page_idx, page in enumerate(reader.pages):
            for img_idx, image_file_object in enumerate(page.images):
                pdf_extracted += 1
                total_extracted += 1
                ext = os.path.splitext(image_file_object.name)[1]
                if not ext:
                    # try to guess from image type or default to png
                    ext = ".png"
                
                # Make clean safe filename
                safe_pdf_name = pdf_name.replace(".pdf", "").replace(" ", "_")
                img_name = f"{safe_pdf_name}_p{page_idx+1}_img{pdf_extracted}{ext}"
                img_path = os.path.join(output_dir, img_name)
                
                with open(img_path, "wb") as f:
                    f.write(image_file_object.data)
                print(f"  Extracted image {pdf_extracted}: {img_name}")
        print(f"Finished {pdf_name}: Extracted {pdf_extracted} images.")
    except Exception as e:
        print(f"Error processing {pdf_name}: {e}")

print(f"\nImage extraction complete! Total images extracted: {total_extracted}")
