from docx import Document
import os

DOCX_PATH = "Aesthara - Website flow.docx"
OUT_DIR = "public/assets/flow-logos"

os.makedirs(OUT_DIR, exist_ok=True)

doc = Document(DOCX_PATH)
print(f"Paragraphs: {len(doc.paragraphs)}")
print(f"Inline shapes: {len(doc.inline_shapes)}")

saved = 0
for i, shape in enumerate(doc.inline_shapes, start=1):
    try:
        blip = shape._inline.graphic.graphicData.pic.blipFill.blip
        rId = blip.embed
        part = doc.part.related_parts[rId]
        data = part.blob
        ext = part.content_type.split("/")[-1]
        filename = f"flow-logo-{i}.{ext}"
        out_path = os.path.join(OUT_DIR, filename)
        with open(out_path, "wb") as f:
            f.write(data)
        print("saved", filename)
        saved += 1
    except Exception as e:
        print("shape", i, "error", e)

print(f"Saved {saved} images to {OUT_DIR}")
