#!/usr/bin/env python3
import re
import os

def fix_markdown_formatting(content):
    """Fix common markdown formatting issues"""
    lines = content.split('\n')
    fixed_lines = []
    
    for i, line in enumerate(lines):
        # Remove trailing spaces
        line = line.rstrip()
        
        # Fix heading spacing - add blank line before and after headings
        if line.startswith('#'):
            # Add blank line before heading (if previous line is not blank)
            if i > 0 and fixed_lines and fixed_lines[-1].strip():
                fixed_lines.append('')
            fixed_lines.append(line)
            # Add blank line after heading (if next line exists and is not blank)
            if i < len(lines) - 1 and lines[i + 1].strip():
                fixed_lines.append('')
                fixed_lines.append('')  # We'll remove the extra one later
        # Fix list spacing - add blank line before first list item
        elif line.startswith('- ') or line.startswith('* '):
            # Check if previous line is not a list item and not blank
            if (i > 0 and fixed_lines and fixed_lines[-1].strip() and 
                not fixed_lines[-1].startswith('- ') and 
                not fixed_lines[-1].startswith('* ')):
                fixed_lines.append('')
            fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    # Remove duplicate blank lines
    result_lines = []
    prev_blank = False
    for line in fixed_lines:
        if line.strip() == '':
            if not prev_blank:
                result_lines.append(line)
            prev_blank = True
        else:
            result_lines.append(line)
            prev_blank = False
    
    # Ensure file ends with single newline
    if result_lines and result_lines[-1].strip():
        result_lines.append('')
    
    return '\n'.join(result_lines)

def process_file(filepath):
    """Process a single markdown file"""
    print(f"Processing {filepath}...")
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        fixed_content = fix_markdown_formatting(content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

# Process all markdown files in current directory
md_files = ['reflection.md', 'model_card.md', 'ai_output.md', 'final_doc.md', 'prompt_used.md']

for file in md_files:
    if os.path.exists(file):
        process_file(file)
    else:
        print(f"File {file} not found")

print("Markdown formatting fixes complete!")
