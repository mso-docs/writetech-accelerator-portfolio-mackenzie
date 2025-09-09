# Model Card | Meta Llama 4 Scout

## Overview

Llama 4 is a multimodal AI model that uses a mixture-of-experts (MoE) architecture for functionalWhen training, Llama 4 Scout had the following environmental impact:

- **GPU Hours (H100‑80GB):** ~5.0M (Scout) of ~7.38M total across Llama 4;
- **Estimated Location‑Based GHG Emissions:** ~1,354 tCO₂e (Scout) of ~1,999 tCO₂e total; market‑based reported as 0 tCO₂e due to Meta's renewable matching.nd performance purposes.

## Model Details

- **Developer:** Meta
- **Release Date:** April 5, 2025
- **Model Type:** Decoder‑only, Mixture‑of‑Experts (MoE); native multimodal (text + images) with early‑fusion vision.
- **Size:** ~17B active parameters (≈109B total, 16 experts).
- **Modalities:**
  - **Input:** Multilingual text, images (tested up to ~5 images).
  - **Output:** Multilingual text & code.

- **Context length:** 10M tokens (see caveats under Long‑context behavior).
- **Supported Languages (instruction variant):** Arabic, English, French, German, Hindi, Indonesian, Italian, Portuguese, Spanish, Tagalog, Thai, Vietnamese.
- Knowledge Cutoff: Aug 2024.
- License: Llama 4 Community License (custom; commercial use permitted with conditions; includes MAU >700M clause).

## Intended Use

The following sections describe in and out of scope usage for Lllama 4 Scout.

### In-Scope

The following functions are in scope for Llama 4 Scout:

- AI assistant chatting
- Multilingual text generation
- Image understanding (i.e., captioning, visual Q&A, reasoning over diagrams and documents)
- Summarization
- Code assistance
- Retrieval-grounded QA
- Tool and function calling

## Out-of-Scope

The following functions are out-of-scope for Llama 4 Scout:

- Usage that violates laws, policies, or Meta's Acceptable Use Policy
- High-risk domains without guardrails
- Languages or capabilities beyond supported coverage without additional evaluation or tuning
- Fully autonomous safety decisions without human oversight

### Training Data

Llama 4 Scout's pre-training data includes the following:

- Llama 4 Scout received multimodal pre-training on around 40 trillion tokens. This data was publicly available, licensed, and also included Meta products and services data.
- Broader pre-training information spans ~200 languages, however, official evaluations focus on the 12 languages mentioned above.

## Architecture and Quantization

Llama 4 is a decoder-only Mixture-of-Experts (MoE) model, meaning that its knowledge base spans 16 experts with around 17 billion parameters activated per token.

Released weights include:

- **bf16:** Allows single-H100 operation with modest quality loss.
- **Maverick:** Provides FP8 weights.

## Input and Output

The following sections cover the Inputs and Outputs associated with Llama 4 Scout.

### Inputs

Llama 4 Scout can use the following inputs:

- UTF-8 text
- Single images
- Multiple images

\* Official testing used up to 5 images at once.

### Outputs

Llama 4 Scout generates the following outputs:

- Text
- Code
- Structured formats (i.e., JSON)
- Tool calling

## Evaluations

### Evaluations (instruction-tuned, indicative)

| Category              | Benchmark                           | Shots | Metric          | Scout  |
|----------------------|-------------------------------------|:-----:|-----------------|:------:|
| Reasoning & Knowledge| MMLU-Pro                             |   0   | macro avg. acc  | ~74.3  |
| Coding               | LiveCodeBench (10/01/24–02/01/25)   |   0   | pass@1          | ~32.8  |
| Image Reasoning      | MMMU                                 |   0   | accuracy        | ~69.4  |
| Image Reasoning      | MMMU-Pro                             |   0   | accuracy        | ~52.2  |
| Math/Vision          | MathVista                            |   0   | accuracy        | ~70.7  |
| Image Understanding  | ChartQA                              |   0   | relaxed acc     | ~88.8  |
| Image Understanding  | DocVQA (test)                        |   0   | ANLS            | ~94.4  |

> **Notes:** (1) Values are reported by Meta for bf16 checkpoints; results vary by decoding, toolchain, and prompt templates. (2) Long‑context claims may not translate to consistent reasoning quality across the entire window; validate on your stack.

## Safety Overview

Here are some of the safety protections and risk areas that were evaluated during the training phase:

1. **System Protections:** Meta recommends deploying models within a guardrail stack, which means using tools like Llama Guard for input/output filtering. Meta also recommends using application-specific evaluation datasets for further protection.
2. **Risk Areas Evaluated:** Meta evaluated the following risk areas when performing training on Llama 4 Scout: child safety, cybersecurity, chemical/biological safety, domestic safety, and more.
3. **Refusal Tuning:** Safety data used in training included innocent or benign prompts to reduce the number of false refusals from Llama 4, while still maintaining policy compliance.

## Risks

Llama 4 Scout has the following risks:

- Hallucinations and Reasoning Errors
- Prompt Injection/Jailbreaks
- Vision-Specific Risks
- Language Coverage Gaps

## Mitigations

Here are the ways you can mitigate the risks above.

### Hallucinations and Reasoning Errors

- Retrieval Augmented Generation (RAG)
- Calibrated System Prompts
- Human-in-the-Loop Review

### Prompt Injection/Jailbreaks

- Content filters
- Instruction isolation
- Tool-use validation
- Red-teaming

### Vision-Specific Risks

- Sensitive content detection
- OCR of private-data controls
- Image pre-filters
- Rate limits

### Language Coverage Gaps

- Additional evaluation for languages
- Tuning for additional languages

## Environmental Impact

When training, Llama 4 Scout had the following environmental impact:

 - **GPU Hours (H100‑80GB):** ~5.0M (Scout) of ~7.38M total across Llama 4;

- **Estimated Location‑Based GHG Emissions:** ~1,354 tCO₂e (Scout) of ~1,999 tCO₂e total; market‑based reported as 0 tCO₂e due to Meta’s renewable matching.

## Ethical Considerations

Llama 4 can cause the following ethical risks or issues when used:

- Bias and representational harms across languages, domains, and visuals.
- Risk of inappropriate or unsafe content without mitigations.
- Potential privacy concerns when prompts include personal data or images.

These ethical risks or issues can be mitigated in the following ways:

- Deploy with Transparent User Notices
- Logging
- Appeal/Override Paths
- Data‑Governance Policies.

## Data Governance and Privacy

The pre-training data includes both publicly-shared content from Meta platforms and third-party licensed, public data.

Please adhere to privacy laws and your organization's policies when giving Llama 4 prompts and images.

Please avoid sensitive personal data, personally identifiable information (PII), or personal health information (PHI) when using Llama 4 Scout.

## Long-Context Behavior

The 10 million token window allows for very large inputs from the user, however, retrieval style queries may degrade less than complex, long-range reasoning.

Evaluate Llama 4 on your own stack and consider chunking and indexing for better results.

## Responsible Use Checklist

## Scope & Model Facts

- [ ] Confirms model is **Llama 4 Scout** (multimodal text+image); document supported languages and prompt format.
- [ ] Lists in-scope user groups, use cases, and modalities; explicitly lists out-of-scope uses.
- [ ] Records model build/artifacts: model hash, container/image tag, prompt template version, safety config versions.

### License & Acceptable‑Use Compliance

- [ ] Reviewed and comply with **Llama 4 Community License** and **Acceptable‑Use Policy**; export controls considered.
- [ ] Attribution, redistribution, and usage constraints documented in product/legal notes.
- [ ] Third‑party data/IP compliance verified (uploads, images, code).

### Intended‑Use & Capability Scoping

- [ ] Defines allowed tasks (e.g., summarization, Q&A, doc chat, non‑clinical descriptions of images).
- [ ] Blocks or routes **out‑of‑scope** tasks (medical/legal/financial advice, biometric inference, etc.).
- [ ] If multilingual, restricts to supported languages; shows graceful fallback/refusal behavior.

### Safety Controls

- [ ] **Input filtering** via **Prompt Guard** and/or **Llama Guard (v3/v4)** before inference.
- [ ] **Output filtering** via **Llama Guard** after inference; unsafe content is blocked or transformed.
- [ ] **Tooling Guardrails:** Allow/Deny policy for tool use (code exec, browsing, file I/O); unsafe tools disabled by default.

### Red‑Teaming & Evaluations

- [ ] Red‑team tests cover self‑harm, violence, illicit behavior, hate, sexual content, privacy, and safety‑critical areas.
- [ ] Domain‑specific evaluations added (e.g., cybersecurity if exposing code or security helpers).
- [ ] Regression gates defined; results and thresholds are version‑controlled.

### Data Governance & Privacy

- [ ] **PII Minimization:** default no retention of prompts/images/outputs unless necessary; retention schedule defined.
- [ ] Secure storage for any retained data; role‑based access; auditable review and deletion requests.
- [ ] **Images:** strip/blur PII where feasible; scrub EXIF/metadata unless needed.

### Transparency & User Experience

- [ ] **Clear Disclosure:** “Powered by **Llama 4 — Scout**”, supported languages, limitations, and refusal patterns.
- [ ] Published prohibited‑use policy; user reporting channel and appeal process.
- [ ] Safe‑completion UX (helpful refusals + safer alternatives).

### Moderation Operations

- [ ] Human‑in‑the‑loop escalation defined for high‑risk categories.
- [ ] Moderation taxonomy, thresholds, and blocklists are versioned and auditable.
- [ ] Incident playbook exists (triage → rollback → user notice → legal/compliance review).

### Access, Security & Abuse Prevention

- [ ] Authentication; **rate limits**; anomaly/abuse detection; geo controls if applicable.
- [ ] Secrets in a managed vault; responses scrubbed of secrets/credentials.
- [ ] Disable high‑risk tools in untrusted contexts (e.g., remote code execution).

### Quality, Bias & Fairness

- [ ] Diverse test sets reflect user populations; track refusal vs. over‑compliance balance.
- [ ] Document limitations; provide user recourse for harmful/biased outputs.
- [ ] Re‑evaluate after model/prompt/guard updates; track deltas.

### Multimodal‑Specific Safeguards (Scout)

- [ ] For **image inputs**: state uncertainties; avoid medical/legal/biometric claims; prohibit face recognition/sensitive inferences.
- [ ] Copyright/IP guidance for uploads; staff trained on takedown requests.

### Logging & Monitoring

- [ ] Log (privacy‑aware) prompts/responses, guard events (category/action), tool calls; mask or hash PII.
- [ ] Alerts on spikes in unsafe categories, refusal loops, and anomaly patterns.
- [ ] Rotation/retention policy documented.

### 12) Deployment Hygiene

- [ ] **Version Pins:** Model build, prompt templates, **Llama Guard/Prompt Guard** configs, routing logic.
- [ ] Rollback plan; shadow/canary before full rollout.
- [ ] “Last reviewed” owners sign‑off (see below).

---

### Ownership and Review

| Role | Name / Team | Responsibilities | Signature | Date |
|---|---|---|---|---|
| Policy Owner |  | Defines scope, policy text, review cadence |  |  |
| Security Owner |  | Threat model, guardrail configs, incident process |  |  |
| Product Owner |  | UX disclosures, refusal flows, feature gating |  |  |
| Data/Privacy |  | Data minimization, retention, user rights |  |  |

## How to Run Ollama

Perform the following commands in PowerShell (Windows):

```powershell
ollama pull llama4:scout   # ~67 GB package; text + image; 10M ctx (Ollama page)
ollama run  llama4:scout
```
Check out the [Quick Start Guide](quick-start.md) to learn more.

## Versioning

This model card was created for the WriteTech Hub Accelerator Program on September 8, 2025.

This documentation is based on the official Meta docs as of September 2025.

Refer to Meta's official model card and repo for any updates and revisions.

## References

- [Llama 4 Model Card](https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md)
