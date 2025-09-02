---
id: vale-walkthrough
title: Setting up Vale for technical writing
sidebar_label: Vale walkthrough
---

# My Vale setup walkthrough

When I was building this portfolio, I wanted to ensure my technical writing was consistent and professional. I decided to use Vale, a prose linting tool, to help catch style issues and maintain quality across all my documentation.

## Why I chose Vale

I needed something that could:
- Check my writing against established style guides
- Handle technical terminology without false positives
- Integrate into my documentation workflow
- Be customized for my specific needs

Vale with the Microsoft Writing Style Guide seemed like the perfect fit for technical documentation.

## What I configured

### Core setup
I started by installing Vale globally via Chocolatey (it was already installed on my system), then created a comprehensive configuration:

- `vale.ini` - My main configuration file
- `.vale/config/vocabularies/TechWriting/accept.txt` - All the technical terms I use
- `.vale/config/vocabularies/TechWriting/reject.txt` - Words I want to avoid
- `.vale/config/TechWriting.yml` - Custom rules for better suggestions
- `.vale/config/Informal.yml` - Catches casual language in technical docs

### Technical vocabulary I added
Since I work with modern web technologies, I needed to whitelist a lot of terms that Vale's default dictionary doesn't recognize:

- Documentation tools: Docusaurus, Astro, Redocly, GitBook
- Programming: JavaScript, TypeScript, React, Next.js, GraphQL
- Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD
- Blockchain: Ethereum, Solana, DeFi, NFTs, smart contracts
- General tech: API, REST, JSON, YAML, CLI, SDK

### Smart file handling
I configured different rules for different types of content:

- **README files**: I allow first-person language (like this document!)
- **Blog posts**: More casual tone is acceptable
- **Main documentation**: Stricter professional writing standards
- **Template files**: Completely ignored (no point checking Lorem ipsum)

## The results

Before my configuration, Vale was reporting **431 errors** on my documentation - mostly false positives on legitimate technical terms like "Docusaurus" and "blockchain."

After setting up my custom configuration, I'm down to about **42 actionable errors** that actually help improve my writing quality.

## How I use it day-to-day

I typically run these commands:

```bash
# Check everything
vale .

# Check specific files I'm working on
vale README.md
vale docs/documentation-tooling/

# Use my custom config explicitly
vale --config=vale.ini docs/
```

## What I learned

Setting up Vale taught me several things about technical writing:

1. **Consistency matters**: Having automated checks helps maintain a consistent voice across all documentation
2. **Context is key**: Different types of content need different rules (portfolio vs. API docs)
3. **Technical accuracy**: It's crucial to maintain a vocabulary of accepted technical terms
4. **Practical application**: The tool needs to fit your workflow, not dictate it

## Common issues I fixed

### Heading capitalization
I learned that Microsoft style prefers sentence-case headings:
- ❌ "How To Set Up Your Environment"
- ✅ "How to set up your environment"

### Technical term consistency
I made sure all product names and technical terms use proper capitalization:
- ❌ "astronomer", "docusaurus"
- ✅ "Astronomer", "Docusaurus"

### Reducing jargon
Vale helped me identify overly complex language:
- ❌ "utilize this functionality to facilitate..."
- ✅ "use this feature to help..."

## Integration with my workflow

I'm planning to integrate Vale into my development process by:
- Adding it to my VS Code setup with the Vale extension
- Including Vale checks in my CI/CD pipeline
- Running it before publishing any new documentation

## Tips for others

If you're setting up Vale for technical writing:

1. **Start with a base style guide** (Microsoft, Google, etc.)
2. **Build your vocabulary gradually** - add terms as you encounter false positives
3. **Configure different rules for different content types**
4. **Focus on actionable feedback** rather than perfect scores
5. **Make it part of your regular workflow**

Vale has significantly improved the consistency and professionalism of my technical writing, and I'd recommend it to anyone serious about documentation quality.

## Next steps

I'm planning to:
- Expand my custom vocabulary as I work with new technologies
- Create project-specific rules for different types of documentation
- Share my configuration with team members for consistency
- Explore integrating other style guides for different audiences
