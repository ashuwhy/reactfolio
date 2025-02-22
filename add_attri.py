import os

attribution_comment = """/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/reactfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

"""

def add_attribution_to_js_files(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.css')):
                filepath = os.path.join(root, file)
                print(f"Adding attribution to: {filepath}")
                with open(filepath, 'r+') as f:
                    content = f.read()
                    f.seek(0, 0)
                    f.write(attribution_comment.rstrip('\n') + '\n\n' + content)

if __name__ == "__main__":
    add_attribution_to_js_files('src')
    print("Attribution comments added to all .js, .jsx, .ts, .tsx, .css files in the src directory.")