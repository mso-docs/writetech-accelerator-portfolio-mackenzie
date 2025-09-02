# Automated Documentation Linting

This repository demonstrates automated documentation quality checks and API docs generation with **Vale**, **Spectral**, and **Redocly**.

## What I Set Up
- **Vale** runs in GitHub Actions on pushes to `main` and lints Markdown files (`*.md`) using the Microsoft editorial style declared in `.vale.ini`.
- **Spectral** runs in GitHub Actions on pushes to `main` and validates any `*.yaml` files, including the sample OpenAPI spec at `docs/docs-automation/openapi.yaml`.
- **Redocly CLI** builds a static HTML API reference site from the sample OpenAPI file; the build output is uploaded as a workflow artifact.

### Repository Layout
```
.
├── .vale.ini
├── .spectral.yaml
├── .github/
│   └── workflows/
│       ├── vale.yml
│       └── spectral.yml
└── docs/
    └── docs-automation/
        ├── sample.md
        ├── openapi.yaml
        └── README.md
```

## What Standards Were Enforced with Vale and Spectral
The following sections detail the rule-setting processes in Vale and Spectral.
### Vale
- **Config:**  
  ```ini
  StylesPath = .vale
  Packages = Microsoft

  [*.{md,markdown}]
  BasedOnStyles = Vale, Microsoft
  ```
- **Enforces (examples):** heading capitalization consistency, punctuation and spacing, clear terminology, bias/style guidance per Microsoft style rules.
- **Scope:** `*.md` files anywhere in the repo.
- **Customization-ready:** you can add a custom vocabulary later in `.vale/styles/Vocab/Project/` to whitelist product names and acronyms.

### Spectral
- **Config:**  
  ```yaml
  extends: ["spectral:oas"]

  rules:
    operation-operationId:
      description: "Each operation should have an operationId."
      given: "$.paths[*][*]"
      severity: warn
      then:
        field: operationId
        function: truthy
  ```
- **Enforces:** OpenAPI 3.x best practices via `spectral:oas` plus a custom rule that encourages stable `operationId`s for every operation.
- **Scope:** all `**/*.yaml` files (including `docs/docs-automation/openapi.yaml`).

## Example of Workflow Log
Here is a log of my Vale lint, which I performed locally:
``` bash
$ vale .

 blog\2019-05-28-first-blog-post.md
 8:27  warning  In general, don't use an        Microsoft.Ellipses
                ellipsis.
 12:1  warning  In general, don't use an        Microsoft.Ellipses
                ellipsis.


 blog\2021-08-26-welcome\index.md
 8:65   suggestion  'are powered' looks like        Microsoft.Passive
                    passive voice.
 16:26  suggestion  'be added' looks like passive   Microsoft.Passive
                    voice.
 18:24  suggestion  'be extracted' looks like       Microsoft.Passive
                    passive voice.


 docs\ai-for-docs\README.md
 1:3   warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                   title or heading.
 1:3   suggestion  'AI for Documentation'          Microsoft.Headings
                   should use sentence-style
                   capitalization.
 15:4  suggestion  'How to View' should use        Microsoft.Headings
                   sentence-style capitalization.


 .vale\README.md
 1:3    suggestion  'Vale Configuration Guide'      Microsoft.Headings
                    should use sentence-style
                    capitalization.
 5:4    suggestion  'Configuration Overview'        Microsoft.Headings
                    should use sentence-style
                    capitalization.
 7:6    suggestion  'is configured' looks like      Microsoft.Passive
                    passive voice.
 9:4    suggestion  'Files Created' should use      Microsoft.Headings
                    sentence-style capitalization.
 11:5   suggestion  'Core Configuration'            Microsoft.Headings
                    should use sentence-style
                    capitalization.
 18:5   suggestion  'Key Features' should use       Microsoft.Headings        
                    sentence-style capitalization.
 20:6   suggestion  '1. Technical Vocabulary'       Microsoft.Headings
                    should use sentence-style
                    capitalization.
 28:6   suggestion  '2. File-Specific Rules'        Microsoft.Headings
                    should use sentence-style
                    capitalization.
 34:6   suggestion  '3. Custom Rules' should use    Microsoft.Headings
                    sentence-style capitalization.
 39:4   suggestion  'Usage Examples' should use     Microsoft.Headings
                    sentence-style capitalization.
 57:4   suggestion  'Rule Levels' should use        Microsoft.Headings
                    sentence-style capitalization.
 62:4   suggestion  'Common Fixes' should use       Microsoft.Headings
                    sentence-style capitalization.
 64:5   suggestion  'Heading Capitalization'        Microsoft.Headings
                    should use sentence-style
                    capitalization.
 69:5   suggestion  'Technical Terms' should use    Microsoft.Headings
                    sentence-style capitalization.
 70:1   suggestion  Verify your use of 'Ensure'     Microsoft.Vocab
                    with the A-Z word list.
 71:5   error       Punctuation should be inside    Microsoft.Quotes
                    the quotes.
 72:5   error       Punctuation should be inside    Microsoft.Quotes
                    the quotes.
 74:5   suggestion  'Acronym Definitions'           Microsoft.Headings
                    should use sentence-style
                    capitalization.
 76:10  suggestion  'DAG' has no definition.        Microsoft.Acronyms
 81:5   suggestion  'Adding New Terms' should use   Microsoft.Headings
                    sentence-style capitalization.
 84:5   suggestion  'Modifying Rules' should use    Microsoft.Headings
                    sentence-style capitalization.
 90:5   suggestion  'Ignoring Files' should use     Microsoft.Headings
                    sentence-style capitalization.
 95:5   warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                    title or heading.
 98:5   warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                    title or heading.
 98:8   warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                    title or heading.


 README.md
 1:3    suggestion  'WriteTechHub Accelerator       Microsoft.Headings
                    Program Portfolio' should use
                    sentence-style capitalization.
 3:13   suggestion  'WTH' has no definition.        Microsoft.Acronyms
 5:4    suggestion  'Documentation & DevOps         Microsoft.Headings
                    Portfolio Projects' should use
                    sentence-style capitalization.
 13:4   suggestion  'Project Organization'          Microsoft.Headings
                    should use sentence-style
                    capitalization.
 14:55  suggestion  'be organized' looks like       Microsoft.Passive
                    passive voice.
 24:4   suggestion  'Modules & Deliverables'        Microsoft.Headings
                    should use sentence-style
                    capitalization.
 26:5   suggestion  '1. Tooling & Static Site       Microsoft.Headings
                    Generators' should use
                    sentence-style capitalization.
 29:5   suggestion  '2. API Documentation           Microsoft.Headings
                    & OpenAPI' should use
                    sentence-style capitalization.
 29:8   warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                    title or heading.
 33:5   suggestion  '3. Automation & Workflows'     Microsoft.Headings
                    should use sentence-style
                    capitalization.
 37:5   suggestion  '4. AI for Documentation'       Microsoft.Headings
                    should use sentence-style
                    capitalization.
 37:8   warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                    title or heading.
 41:5   suggestion  '5. DevOps & Cloud' should use  Microsoft.Headings
                    sentence-style capitalization.
 45:5   suggestion  '6. Web3 Documentation'         Microsoft.Headings
                    should use sentence-style
                    capitalization.
 51:4   suggestion  'Repository Structure'          Microsoft.Headings
                    should use sentence-style
                    capitalization.
 65:4   suggestion  'How to Use This Repository'    Microsoft.Headings
                    should use sentence-style
                    capitalization.
 73:4   suggestion  'Contact & Contributions'       Microsoft.Headings
                    should use sentence-style
                    capitalization.
 79:38  error       Remove the spaces around ' —    Microsoft.Dashes
                    '.


 docs\api-documentation-openapi\README.md
 1:3    warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                    title or heading.
 1:3    suggestion  'API Documentation & OpenAPI'   Microsoft.Headings
                    should use sentence-style
                    capitalization.
 14:40  error       Use 'for example' instead of    Microsoft.Foreign
                    'e.g.,'.
 17:4   suggestion  'How to View' should use        Microsoft.Headings
                    sentence-style capitalization.


 blog\2019-05-29-long-blog-post.md
 8:26  warning  Remove 'very' if it's not       Microsoft.Adverbs
                important to the meaning of
                the statement.


 docs\api-documentation-openapi\intro.md
 1:3   suggestion  'API Documentation Project      Microsoft.Headings
                   Overview' should use
                   sentence-style capitalization.
 1:3   warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                   title or heading.
 3:50  suggestion  'REST' has no definition.       Microsoft.Acronyms
 7:4   suggestion  'Live Site (For GitHub          Microsoft.Headings
                   Readme)' should use
                   sentence-style capitalization.
 10:8  suggestion  Use first person (such as '     Microsoft.FirstPerson
                   I') sparingly.
 19:4  suggestion  'What I Learned' should use     Microsoft.Headings
                   sentence-style capitalization.
 19:8  suggestion  Use first person (such as '     Microsoft.FirstPerson
                   I') sparingly.


 docs\api-documentation-openapi\reference\berry-firmness.md
 1:3    suggestion  'Berry Firmness' should use     Microsoft.Headings
                    sentence-style capitalization.
 130:4  suggestion  'Berry Firmness Schema'         Microsoft.Headings
                    should use sentence-style
                    capitalization.


 docs\api-documentation-openapi\reference\berry-flavor.md
 1:3    suggestion  'Berry Flavor' should use       Microsoft.Headings
                    sentence-style capitalization.
 270:4  suggestion  'Berry Flavor Schema'           Microsoft.Headings
                    should use sentence-style
                    capitalization.
 282:4  suggestion  'FlavorBerryMap Schema'         Microsoft.Headings
                    should use sentence-style
                    capitalization.


 docs\api-documentation-openapi\reference\berry.md
 79:4  suggestion  'Berry Schema' should use       Microsoft.Headings
                   sentence-style capitalization.
 98:4  suggestion  'BerryFlavorMap Schema'         Microsoft.Headings
                   should use sentence-style
                   capitalization.


 docs\devops-and-cloud-docs\README.md
 1:3    suggestion  'DevOps & Cloud Documentation'  Microsoft.Headings
                    should use sentence-style
                    capitalization.
 12:42  error       Use 'for example' instead of    Microsoft.Foreign  
                    'e.g.,'.
 13:41  suggestion  'AWS' has no definition.        Microsoft.Acronyms
 13:53  suggestion  'GCP' has no definition.        Microsoft.Acronyms
 16:4   suggestion  'How to Use' should use         Microsoft.Headings
                    sentence-style capitalization.
 23:4   suggestion  'AWS' has no definition.        Microsoft.Acronyms


 docs\docs-automation\README.md
 1:3   suggestion  'Docs Automation — Vale,        Microsoft.Headings
                   Spectral, Redocly' should use
                   sentence-style capitalization.
 1:18  error       Remove the spaces around ' —    Microsoft.Dashes
                   '.
 3:22  suggestion  Verify your use of 'sample'     Microsoft.Vocab
                   with the A-Z word list.
 6:14  error       Remove the spaces around ' —    Microsoft.Dashes
                   '.
 7:17  error       Remove the spaces around ' —    Microsoft.Dashes
                   '.
 8:10  error       Remove the spaces around ' —    Microsoft.Dashes
                   '.


 docs\docs-automation\sample.md
 1:3   suggestion  'Docs Automation Sample'        Microsoft.Headings
                   should use sentence-style
                   capitalization.
 1:19  suggestion  Verify your use of 'Sample'     Microsoft.Vocab
                   with the A-Z word list.
 3:11  suggestion  Verify your use of 'sample'     Microsoft.Vocab
                   with the A-Z word list.


 docs\documentation-tooling\README.md
 2:3    suggestion  'Documentation Tooling Project  Microsoft.Headings
                    (Docusaurus Site)' should use
                    sentence-style capitalization.
 5:4    suggestion  'Live Site' should use          Microsoft.Headings
                    sentence-style capitalization.
 8:8    suggestion  Use first person (such as '     Microsoft.FirstPerson
                    I') sparingly.
 14:15  suggestion  Use first person (such as       Microsoft.FirstPerson
                    'Me') sparingly.
 24:3   suggestion  Verify your use of 'Ensure'     Microsoft.Vocab
                    with the A-Z word list.
 27:24  suggestion  'RSS' has no definition.        Microsoft.Acronyms
 34:4   suggestion  'What I Learnt' should use      Microsoft.Headings
                    sentence-style capitalization.
 34:8   suggestion  Use first person (such as '     Microsoft.FirstPerson
                    I') sparingly.


 docs\documentation-tooling\astronomer-audit.md
 9:31   suggestion  Try to simplify this sentence.  Microsoft.Semicolon
 10:37  suggestion  Try to simplify this sentence.  Microsoft.Semicolon
 14:4   suggestion  'Scope Reviewed' should use     Microsoft.Headings
                    sentence-style capitalization.
 18:4   warning     For a general audience, use     Microsoft.GeneralURL
                    'address' rather than 'URL'.
 20:4   warning     For a general audience, use     Microsoft.GeneralURL
                    'address' rather than 'URL'.
 22:4   warning     For a general audience, use     Microsoft.GeneralURL
                    'address' rather than 'URL'.
 24:4   warning     For a general audience, use     Microsoft.GeneralURL
                    'address' rather than 'URL'.
 30:4   suggestion  'Executive Summary' should use  Microsoft.Headings
                    sentence-style capitalization.
 36:59  suggestion  'DAG' has no definition.        Microsoft.Acronyms
 39:42  suggestion  'DAG' has no definition.        Microsoft.Acronyms
 45:4   suggestion  'Information Architecture       Microsoft.Headings
                    (Current → Proposed)'
                    should use sentence-style
                    capitalization.
 47:5   suggestion  'Current High-Level IA          Microsoft.Headings
                    (simplified)' should use
                    sentence-style capitalization.
 47:24  warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                    title or heading.


 docs\api-documentation-openapi\Learn-More-About-PokeAPI.md
 1:3      suggestion  'Learn More About PokéAPI       Microsoft.Headings
                      v2' should use sentence-style
                      capitalization.
 5:4      error       Use 'what's' instead of 'What   Microsoft.Contractions
                      is'.
 8:5      suggestion  'Quick Facts' should use        Microsoft.Headings
                      sentence-style capitalization.
 9:10     warning     For a general audience, use     Microsoft.GeneralURL
                      'address' rather than 'URL'.
 14:57    suggestion  'be used' looks like passive    Microsoft.Passive
                      voice.
 16:31    warning     For a general audience, use     Microsoft.GeneralURL
                      'address' rather than 'URL'.
 16:45    error       Use 'they're' instead of 'they  Microsoft.Contractions
                      are'.
 19:49    suggestion  'is called' looks like passive  Microsoft.Passive
                      voice.
 25:55    error       Use 'they're' instead of 'they  Microsoft.Contractions
                      are'.
 25:60    suggestion  'are stored' looks like         Microsoft.Passive
                      passive voice.
 28:71    error       Use 'they're' instead of 'they  Microsoft.Contractions
                      are'.
 28:76    suggestion  'are learned' looks like        Microsoft.Passive
                      passive voice.
 45:20    suggestion  Verify your use of 'allows'     Microsoft.Vocab
                      with the A-Z word list.
 63:6     suggestion  'Berry Flavors' should use      Microsoft.Headings
                      sentence-style capitalization.
 82:5     suggestion  'Contest Effects' should use    Microsoft.Headings
                      sentence-style capitalization.
 83:32    suggestion  Verify your use of 'allows'     Microsoft.Vocab
                      with the A-Z word list.
 91:58    suggestion  Verify your use of 'allow'      Microsoft.Vocab
                      with the A-Z word list.
 105:6    suggestion  'Encounter Method' should use   Microsoft.Headings
                      sentence-style capitalization.
 106:33   suggestion  Verify your use of 'allows'     Microsoft.Vocab
                      with the A-Z word list.
 114:117  suggestion  Verify your use of 'allow'      Microsoft.Vocab
                      with the A-Z word list.
 118:6    suggestion  'Encounter Condition Value'     Microsoft.Headings
                      should use sentence-style
                      capitalization.
 119:122  error       Use 'that is' instead of        Microsoft.Foreign
                      'i.e.,'.
 121:28   suggestion  'were mentioned' looks like     Microsoft.Passive
                      passive voice.
 121:81   suggestion  Verify your use of 'above'      Microsoft.Vocab
                      with the A-Z word list.
 129:120  suggestion  Verify your use of 'allow'      Microsoft.Vocab
                      with the A-Z word list.
 145:187  error       Use 'don't' instead of 'do      Microsoft.Contractions
                      not'.
 145:294  suggestion  Consider using 'usually'        Microsoft.Wordiness
                      instead of 'in most cases'.
 158:279  suggestion  Consider using 'all' instead    Microsoft.Wordiness
                      of 'all of'.
 171:43   suggestion  Consider using 'all' instead    Microsoft.Wordiness
                      of 'all of'.
 171:171  error       Use 'it's' instead of 'It is'.  Microsoft.Contractions
 171:174  suggestion  'is built' looks like passive   Microsoft.Passive
                      voice.
 177:4    suggestion  'Learn More' should use         Microsoft.Headings
                      sentence-style capitalization.
 178:105  suggestion  Consider using 'use' instead    Microsoft.Wordiness
                      of 'utilize'.
 178:113  suggestion  Consider using 'all' instead    Microsoft.Wordiness
                      of 'all of'.
 178:496  suggestion  'are covered' looks like        Microsoft.Passive
                      passive voice.


 docs\api-documentation-openapi\getting-started.md
 2:4      error       Use 'what's' instead of 'What   Microsoft.Contractions
                      is'.
 6:5      suggestion  'Base URL' should use           Microsoft.Headings
                      sentence-style capitalization.
 6:10     warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                      title or heading.
 6:10     warning     For a general audience, use     Microsoft.GeneralURL
                      'address' rather than 'URL'.
 9:5      suggestion  'API Version:' should use       Microsoft.Headings
                      sentence-style capitalization.
 9:5      warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                      title or heading.
 12:5     suggestion  'Supported Methods' should use  Microsoft.Headings
                      sentence-style capitalization.
 23:4     suggestion  'Getting Started' should use    Microsoft.Headings
                      sentence-style capitalization.
 26:5     suggestion  'TIP' has no definition.        Microsoft.Acronyms
 28:5     suggestion  'What You'll Learn' should use  Microsoft.Headings
                      sentence-style capitalization.
 31:49    error       Use 'that is' instead of        Microsoft.Foreign
                      'i.e.,'.
 38:42    suggestion  'is required' looks like        Microsoft.Passive
                      passive voice.
 40:5     suggestion  'Using the PokeAPI Postman      Microsoft.Headings
                      Collection' should use
                      sentence-style capitalization.
 41:1     suggestion  Try to avoid using              Microsoft.We
                      first-person plural like 'We'.
 53:4     suggestion  'API Basics' should use         Microsoft.Headings
                      sentence-style capitalization.
 53:4     warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                      title or heading.
 56:5     error       Use 'what's' instead of 'What   Microsoft.Contractions
                      is'.
 56:16    warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                      title or heading.
 57:44    suggestion  Verify your use of 'allows'     Microsoft.Vocab
                      with the A-Z word list.
 61:5     suggestion  'RESTful Architecture'          Microsoft.Headings
                      should use sentence-style
                      capitalization.
 62:17    suggestion  'REST' has no definition.       Microsoft.Acronyms
 63:18    error       Use 'that is' instead of        Microsoft.Foreign
                      'i.e.,'.
 63:74    warning     For a general audience, use     Microsoft.GeneralURL
                      'address' rather than 'URL'.
 64:60    error       Use 'that is' instead of        Microsoft.Foreign
                      'i.e.,'.
 65:36    error       Use 'they're' instead of 'they  Microsoft.Contractions
                      are'.
 115:5    suggestion  'Interpreting the JSON'         Microsoft.Headings
                      should use sentence-style
                      capitalization.
 115:22   warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                      title or heading.
 116:103  suggestion  'are designed' looks like       Microsoft.Passive
                      passive voice.
 123:5    warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                      title or heading.
 123:5    suggestion  'HTTP Methods Used' should use  Microsoft.Headings
                      sentence-style capitalization.
 126:62   suggestion  Verify your use of 'allow'      Microsoft.Vocab
                      with the A-Z word list.
 128:4    suggestion  'Authentication and Access'     Microsoft.Headings
                      should use sentence-style
                      capitalization.
 129:21   suggestion  'REST' has no definition.       Microsoft.Acronyms
 129:34   error       Use 'doesn't' instead of 'does  Microsoft.Contractions
                      not'.
 131:4    suggestion  'Fair Use Policy' should use    Microsoft.Headings
                      sentence-style capitalization.
 137:5    suggestion  'TIP' has no definition.        Microsoft.Acronyms
 137:28   error       Use 'don't' instead of 'do      Microsoft.Contractions
                      not'.
 139:4    suggestion  'Rate Limiting and Usage        Microsoft.Headings
                      Guidelines' should use
                      sentence-style capitalization.
 140:21   error       Use 'hasn't' instead of 'has    Microsoft.Contractions
                      not'.
 140:167  suggestion  'are encouraged' looks like     Microsoft.Passive
                      passive voice.
 142:21   suggestion  Try to avoid using              Microsoft.We
                      first-person plural like 'we'.
 147:4    suggestion  'Core Concepts' should use      Microsoft.Headings
                      sentence-style capitalization.
 148:9    suggestion  'is organized' looks like       Microsoft.Passive
                      passive voice.
 150:21   suggestion  Verify your use of              Microsoft.Vocab
                      'accessible' with the A-Z word
                      list.
 282:55   warning     Remove 'extremely' if it's not  Microsoft.Adverbs
                      important to the meaning of
                      the statement.
 282:81   suggestion  'been amended' looks like       Microsoft.Passive
                      passive voice.
 284:27   warning     Remove 'quite' if it's not      Microsoft.Adverbs
                      important to the meaning of
                      the statement.
 284:69   suggestion  Try to avoid using              Microsoft.We
                      first-person plural like
                      'Let's'.
 288:28   suggestion  Consider using 'all' instead    Microsoft.Wordiness
                      of 'all of'.
 290:9    suggestion  Try to avoid using              Microsoft.We
                      first-person plural like 'we'.
 294:57   suggestion  'be used' looks like passive    Microsoft.Passive
                      voice.
 296:31   warning     For a general audience, use     Microsoft.GeneralURL
                      'address' rather than 'URL'.
 296:45   error       Use 'they're' instead of 'they  Microsoft.Contractions
                      are'.
 299:49   suggestion  'is called' looks like passive  Microsoft.Passive
                      voice.
 305:55   error       Use 'they're' instead of 'they  Microsoft.Contractions
                      are'.
 305:60   suggestion  'are stored' looks like         Microsoft.Passive
                      passive voice.
 308:71   error       Use 'they're' instead of 'they  Microsoft.Contractions
                      are'.
 308:76   suggestion  'are learned' looks like        Microsoft.Passive
                      passive voice.


 docs\tutorial-basics\congratulations.md
 5:17   warning  Don't use end punctuation in    Microsoft.HeadingPunctuation
                 headings.
 15:14  warning  Don't use end punctuation in    Microsoft.HeadingPunctuation
                 headings.


 docs\documentation-tooling\index.md
 1:3     suggestion  'Documentation Tooling Project  Microsoft.Headings
                     (Docusaurus Site)' should use
                     sentence-style capitalization.
 5:4     suggestion  'Live Site' should use          Microsoft.Headings
                     sentence-style capitalization.
 8:8     suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 9:56    suggestion  'DAG' has no definition.        Microsoft.Acronyms
 19:4    suggestion  'What I Learned' should use     Microsoft.Headings
                     sentence-style capitalization.
 19:8    suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 20:75   error       Use 'for example' instead of    Microsoft.Foreign
                     'e.g.,'.
 20:81   suggestion  'DAG' has no definition.        Microsoft.Acronyms        
 22:62   warning     Remove 'quickly' if it's not    Microsoft.Adverbs
                     important to the meaning of
                     the statement.
 22:152  suggestion  'DAG' has no definition.        Microsoft.Acronyms
 27:4    suggestion  'Supporting Diagrams'           Microsoft.Headings
                     should use sentence-style
                     capitalization.
 29:5    suggestion  'Onboarding Flow: “Run          Microsoft.Headings
                     Your First DAG on Astro”'
                     should use sentence-style
                     capitalization.
 29:38   warning     Avoid using acronyms in a       Microsoft.HeadingAcronyms
                     title or heading.
 29:38   suggestion  'DAG' has no definition.        Microsoft.Acronyms


 docs\docs-automation\walkthrough.md
 7:3     suggestion  'My Vale setup walkthrough'     Microsoft.Headings
                     should use sentence-style
                     capitalization.
 7:3     suggestion  Use first person (such as       Microsoft.FirstPerson
                     'My') sparingly.
 9:5     suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 9:36    suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 9:49    suggestion  Verify your use of 'ensure'     Microsoft.Vocab
                     with the A-Z word list.
 9:56    suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 9:109   suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 9:110   suggestion  Use first person (such as 'I')  Microsoft.FirstPerson
                     sparingly.
 9:214   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 11:4    suggestion  'Why I chose Vale' should use   Microsoft.Headings
                     sentence-style capitalization.
 11:7    suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 13:1    suggestion  Use first person (such as 'I')  Microsoft.FirstPerson
                     sparingly.
 14:9    suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 14:20   suggestion  Verify your use of 'against'    Microsoft.Vocab
                     with the A-Z word list.
 16:18   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 17:3    suggestion  'Be customized' looks like      Microsoft.Passive
                     passive voice.
 17:21   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 21:8    suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 24:1    suggestion  Use first person (such as 'I')  Microsoft.FirstPerson
                     sparingly.
 24:83   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 26:16   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'My') sparingly.
 27:79   suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 28:61   suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 32:25   suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 33:6    suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 33:43   suggestion  Use first person (such as '     Microsoft.FirstPerson 
                     I') sparingly.
 37:19   suggestion  'AWS' has no definition.        Microsoft.Acronyms
 39:22   suggestion  'REST' has no definition.       Microsoft.Acronyms
 42:1    suggestion  Use first person (such as 'I')  Microsoft.FirstPerson
                     sparingly.
 44:20   suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 44:23   suggestion  Verify your use of 'allow'      Microsoft.Vocab
                     with the A-Z word list.
 51:8    suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 51:63   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 53:18   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 53:43   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'I'm') sparingly.
 53:66   suggestion  Verify your use of              Microsoft.Vocab
                     'actionable' with the A-Z word
                     list.
 53:113  suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 55:7    suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 57:1    suggestion  Use first person (such as 'I')  Microsoft.FirstPerson
                     sparingly.
 71:8    suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 73:24   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'me') sparingly.
 80:17   suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 83:1    suggestion  Use first person (such as 'I')  Microsoft.FirstPerson
                     sparingly.
 88:1    suggestion  Use first person (such as 'I')  Microsoft.FirstPerson
                     sparingly.
 89:5    error       Punctuation should be inside    Microsoft.Quotes
                     the quotes.
 90:5    error       Punctuation should be inside    Microsoft.Quotes
                     the quotes.
 93:13   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'me') sparingly.
 94:6    suggestion  Consider using 'use' instead    Microsoft.Wordiness
                     of 'utilize'.
 94:46   warning     In general, don't use an        Microsoft.Ellipses
                     ellipsis.
 95:30   warning     In general, don't use an        Microsoft.Ellipses
                     ellipsis.
 97:21   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 99:1    suggestion  Use first person (such as       Microsoft.FirstPerson
                     'I'm') sparingly.
 99:37   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 100:16  suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 101:28  suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 111:15  suggestion  Verify your use of              Microsoft.Vocab
                     'actionable' with the A-Z word
                     list.
 114:72  suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 114:98  suggestion  Use first person (such as       Microsoft.FirstPerson
                     'I'd') sparingly.
 118:1   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'I'm') sparingly.
 119:10  suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.
 119:33  suggestion  Use first person (such as '     Microsoft.FirstPerson
                     I') sparingly.
 121:9   suggestion  Use first person (such as       Microsoft.FirstPerson
                     'my') sparingly.


 docs\intro.md
 7:1    suggestion  Try to avoid using              Microsoft.We
                    first-person plural like
                    'Let's'.
 9:4    suggestion  'Getting Started' should use    Microsoft.Headings  
                    sentence-style capitalization.
 17:62  suggestion  Verify your use of 'above'      Microsoft.Vocab
                    with the A-Z word list.
 18:34  suggestion  'are recommended' looks like    Microsoft.Passive
                    passive voice.
 24:41  suggestion  'be added' looks like passive   Microsoft.Passive
                    voice.
 43:61  suggestion  Consider using 'to' instead of  Microsoft.Wordiness
                    'In order to'.


 docs\tutorial-basics\create-a-blog-post.md
 5:3    suggestion  'Create a Blog Post'            Microsoft.Headings
                    should use sentence-style
                    capitalization.
 7:106  suggestion  'RSS' has no definition.        Microsoft.Acronyms
 7:116  warning     In general, don't use an        Microsoft.Ellipses
                    ellipsis.
 9:4    suggestion  'Create your first Post'        Microsoft.Headings
                    should use sentence-style
                    capitalization.


 docs\tutorial-basics\create-a-page.md
 5:3   suggestion  'Create a Page' should use      Microsoft.Headings
                   sentence-style capitalization.
 13:4  suggestion  'Create your first React Page'  Microsoft.Headings
                   should use sentence-style
                   capitalization.
 33:4  suggestion  'Create your first              Microsoft.Headings
                   Markdown Page' should use
                   sentence-style capitalization.


 docs\tutorial-basics\create-a-document.md
 5:3   suggestion  'Create a Document' should use  Microsoft.Headings
                   sentence-style capitalization.
 13:4  suggestion  'Create your first Doc'         Microsoft.Headings
                   should use sentence-style
                   capitalization.
 25:4  suggestion  'Configure the Sidebar'         Microsoft.Headings
                   should use sentence-style
                   capitalization.
 42:1  error       Use 'it's' instead of 'It is'.  Microsoft.Contractions


 docs\tutorial-basics\deploy-your-site.md
 19:18  suggestion  'are generated' looks like      Microsoft.Passive
                    passive voice.
 31:59  warning     Remove 'easily' if it's not     Microsoft.Adverbs
                    important to the meaning of
                    the statement.
 31:83  warning     Remove 'very' if it's not       Microsoft.Adverbs
                    important to the meaning of
                    the statement.


 docs\tutorial-extras\manage-docs-versions.md
 5:3    suggestion  'Manage Docs Versions'          Microsoft.Headings
                    should use sentence-style
                    capitalization.
 17:19  suggestion  'is copied' looks like passive  Microsoft.Passive
                    voice.
 17:83  suggestion  'is created' looks like         Microsoft.Passive
                    passive voice.
 24:4   suggestion  'Add a Version Dropdown'        Microsoft.Headings
                    should use sentence-style
                    capitalization.
 52:1   error       Use 'it's' instead of 'It is'.  Microsoft.Contractions


 docs\web3-documentation\README.md
 1:3    suggestion  'Web3 Documentation'            Microsoft.Headings
                    should use sentence-style
                    capitalization.
 12:43  error       Use 'for example' instead of    Microsoft.Foreign
                    'e.g.,'.
 17:4   suggestion  'How to Use' should use         Microsoft.Headings
                    sentence-style capitalization.


 docs\tutorial-extras\translate-your-site.md
 7:1     suggestion  Try to avoid using              Microsoft.We
                     first-person plural like
                     'Let's'.
 42:24   suggestion  Verify your use of              Microsoft.Vocab
                     'accessible' with the A-Z word
                     list.
 42:124  suggestion  'is translated' looks like      Microsoft.Passive  
                     passive voice.
 50:4    suggestion  'Add a Locale Dropdown'         Microsoft.Headings
                     should use sentence-style
                     capitalization.

✖ 34 errors, 38 warnings and 237 suggestions in 31 files.
```

Here is an example of my Spectral logs:
```bash
$ spectral lint docs/automation-workflows/api-doc-test1.yml --ruleset spectral.yml
No results with a severity of error found!
```

Here is an example of my Redocly logs:
```bash
$ redocly build-docs docs/docs-automation/openapi.yml --output ./local-site/index.html
Prerendering docs

🎉 bundled successfully in: ./local-site/index.html (37 KiB) [⏱ 2ms].
```

## What Challenges I Faced
- **Windows / Git Bash PATH differences:** Needed to add the Vale or npm global bin directory to `~/.bashrc` so `vale`/`spectral` commands worked in Git Bash.
- **Quoted globs:** Quoting patterns like `"**/*.yaml"` avoided shell expansion issues across environments.
- **Rule noise at first:** Started Spectral’s custom rule as a **warning** to prevent blocking CI until the spec matured.

## What I Learned
- **Keep workflows focused:** one for Markdown (Vale), one for OpenAPI (Spectral + Redocly) makes failures easier to diagnose.
- **Roll out rules gradually:** begin with warnings, then elevate to errors once content is clean.
- **Work with sample files:** Minimal sample files (`sample.md`, `openapi.yaml`) are invaluable for verifying CI wiring quickly.

---

### Local Quick Start (optional)
```bash
# Vale (from repo root)
vale .

# Spectral (use npx to avoid PATH issues)
npx @stoplight/spectral-cli lint "docs/docs-automation/openapi.yaml"
npx @stoplight/spectral-cli lint "**/*.yaml"

# Redocly (build local HTML)
npx @redocly/cli build-docs docs/docs-automation/openapi.yaml --output ./local-site/index.html
```
