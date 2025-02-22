import os

attribution_comment = """/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/portfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

"""

def remove_attribution_from_js_files(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.css')):
                filepath = os.path.join(root, file)
                print(f"Removing attribution from: {filepath}")
                with open(filepath, 'r+') as f:
                    content = f.read()
                    if content.startswith(attribution_comment):
                        # Remove the attribution comment and any leading newlines
                        updated_content = content[len(attribution_comment):].lstrip('\n')
                        f.seek(0, 0)
                        f.write(updated_content)
                        f.truncate()  # Remove any remaining characters if the new content is shorter
                    else:
                        print(f"Attribution comment not found at the beginning of {filepath}, skipping.")

if __name__ == "__main__":
    remove_attribution_from_js_files('src')
    print("Attribution comments removed from .js and .jsx files in the src directory (if they existed).")
