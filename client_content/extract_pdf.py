import os
from pypdf import PdfReader

pdf_dir = "c:/Users/Asif/Music/GitHub/GreenAhom Exp/client_content"

pdfs = [
    "Altered AOA OF GREEN AHOM.pdf",
    "Altered INC-13 MOA OF GREEN AHOM.pdf",
    "ANNUAL REPORT 23-24.pdf",
    "ANNUAL REPORT 2022-23.pdf",
    "ANNUAL REPORT 2024-2025.pdf"
]

print("Starting PDF extraction...")

for pdf_name in pdfs:
    pdf_path = os.path.join(pdf_dir, pdf_name)
    txt_name = pdf_name.replace(".pdf", "_extracted.txt")
    txt_path = os.path.join(pdf_dir, txt_name)
    
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        continue
        
    print(f"Reading {pdf_name}...")
    try:
        reader = PdfReader(pdf_path)
        extracted_text = []
        
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text:
                extracted_text.append(f"--- PAGE {i+1} ---\n{text}\n")
                
        full_text = "\n".join(extracted_text)
        
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(full_text)
            
        print(f"Saved {len(reader.pages)} pages to {txt_name} (Size: {len(full_text)} chars)")
    except Exception as e:
        print(f"Error extracting {pdf_name}: {e}")

print("Extraction completed!")
