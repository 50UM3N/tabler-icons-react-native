import os
import re

def process_files_in_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".js"): 
                file_path = os.path.join(root, file)
                with open(file_path, 'r') as f:
                    content = f.read()
                if 'fill="currentColor"' in content:
                  content = re.sub(r'fill="currentColor"', 'fill={color}', content)
                  content = re.sub(r'stroke={color}', 'stroke="none"', content)
                  content = re.sub(r'strokeWidth={stroke}', 'strokeWidth="0"', content)

                  with open(file_path, 'w') as f:
                      f.write(content)

klasor_yolu = './/icons-js'

process_files_in_folder(klasor_yolu)
