# Vale Configuration Guide

This document explains the Vale setup for your technical writing portfolio.

## Configuration Overview

Vale is configured with the Microsoft Writing Style Guide plus custom rules tailored for technical documentation. The configuration prioritizes clarity, consistency, and technical accuracy.

## Files Created

### Core Configuration
- `vale.ini` - Main configuration file
- `.vale/config/vocabularies/TechWriting/accept.txt` - Accepted technical terms
- `.vale/config/vocabularies/TechWriting/reject.txt` - Terms to avoid
- `.vale/config/TechWriting.yml` - Custom substitution rules
- `.vale/config/Informal.yml` - Flags informal language

### Key Features

#### 1. Technical Vocabulary
The accept list includes:
- Documentation tools (Docusaurus, Astro, Redocly)
- Programming languages and frameworks
- Cloud and DevOps terminology
- Blockchain and Web3 terms
- Common technical acronyms

#### 2. File-Specific Rules
- **README files**: Relaxed first-person restrictions
- **Blog posts**: More informal tone allowed
- **Documentation folder**: Stricter professional writing standards
- **Template files**: Completely ignored (Lorem ipsum content)

#### 3. Custom Rules
- Suggests simpler alternatives to complex terms
- Flags overly informal language in technical docs
- Maintains consistency in capitalization

## Usage Examples

### Check all documentation
```bash
vale .
```

### Check specific files
```bash
vale README.md
vale docs/
```

### Check with specific config
```bash
vale --config=vale.ini README.md
```

## Rule Levels
- **Error**: Critical issues (incorrect terms, major style violations)
- **Warning**: Important but not blocking (acronym usage in headings)
- **Suggestion**: Style improvements (heading capitalization, passive voice)

## Common Fixes

### Heading Capitalization
Microsoft style prefers sentence-case:
- ❌ "How To Use This Feature"
- ✅ "How to use this feature"

### Technical Terms
Ensure proper capitalization:
- ❌ "astronomer", "docusaurus"
- ✅ "Astronomer", "Docusaurus"

### Acronym Definitions
Define acronyms on first use:
- ❌ "Use DAG for workflows"
- ✅ "Use Directed Acyclic Graph (DAG) for workflows"

## Customization

### Adding New Terms
Add technical terms to `.vale/config/vocabularies/TechWriting/accept.txt`

### Modifying Rules
Edit rule severity in `vale.ini`:
```ini
Microsoft.FirstPerson = suggestion  # or warning, error, NO
```

### Ignoring Files
Add patterns to the ignore sections in `vale.ini`

## Integration

### VS Code
Install the Vale extension for real-time linting in your editor.

### CI/CD
Add Vale checks to your build pipeline:
```yaml
- name: Run Vale
  run: vale --config=vale.ini --output=line .
```

This configuration balances technical writing standards with practical needs for a developer portfolio.
