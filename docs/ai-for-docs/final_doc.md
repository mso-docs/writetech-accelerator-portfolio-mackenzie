# Meta Llama 4 Scout
**Model Release Date:** April 5, 2025
**Knowledge Cutoff:** August 2024

## Overview
The following document describes Meta Llama 4 Scout, an AI model that uses multimodal understanding to perform tasks.

## Definitions
Understanding the following definitions will help you better understand how Llama 4 works.
## What is Multimodal Understanding?
**Multimodal understanding** is the ability to comprehend information from various large-language models (LLMs) and inputs, such as images, audio, text, or video. Rather than simply relying on one source, Llama 4 Scout makes sense of and interprets messages from a variety of formats and sources, which makes it easier for you to get the information you need.

### What is Mixture of Experts (MoE) Architecture?
**Mixture of experts architecture** is a machine learning model design, which utilizes specialized networks, referred to as "experts," to increase performance quality and processing speed on tasks. 

Mixture of experts (MoE) architecture has 3 main components:
1) **Experts:** Each expert acts as a separate model that specializes in a specific input or feature. For example, I can have an "expert" in introductory physics.
2) **Gating Mechanisms:** A gating mechanism determines which expert should respond to which input. It evaluates the input and selects an expert to do the job.
3) **Combining Outputs:** Through weighted averaging, the outputs of the experts are combined to create a thorough response.

### What is a Large Language Model (LLM)?
A **large language model** (LLM) is a type of artificial intelligence designed to process and generate human language. These models are trained on massive amounts of text data, which helps the model understand patterns, context, and other topics, which help it to produce quality content on its own.

## Executive Summary
Meta Llama 4 is a collection of models that utilize multimodal understanding and mixture of experts (MoE) architecture.

You can learn more about Llama 4 below:

### What It Is
Llama 4 is a natively multimodal, Mixture-of-Experts (MoE) large-language model (LLM) designed for assistant chat, coding, reasoning, and image understanding.

Llama 4 Scout has 109 billion parameters. Over 17 billion of these parameters are active. This means that the model was trained on over 109 billion parameters, 17 billion of which are activated during its activation. 

This gives you access to a large set of data, which you can use to process requests locally on your computer.

### Context

Llama 4 Scout has a context window of up to 10 million tokens per model page. Inputs can be text or images.

Llama 4 will respond in text or code.

It can respond using text in the following languages:

- Arabic
- English
- French
- German
- Hindi
- Indonesian
- Italian
- Portuguese
- Spanish
- Tagalog
- Thai
- Vietnamese

### Performance Snapshot

The following results are from the pre-training and instruction-tuned data. You can learn more about the areas these tests were performed in via the sections below.

### Pre-Training Results

| Area | Test suite | Shots | Score type | Scout (bf16) |
|---|---|---:|---|---:|
| Reasoning & knowledge | MMLU | 5 | macro-avg accuracy (char) | 79.6 |
| Reasoning & knowledge | MMLU-Pro | 5 | macro-avg exact match | 58.2 |
| Math | MATH | 4 | majority EM @1 | 50.3 |
| Code | MBPP | 3 | pass@1 | 67.8 |
| Multilingual QA | TyDiQA | 1 | mean F1 | 31.5 |
| Charts | ChartQA | 0 | relaxed accuracy | 83.4 |
| Document VQA | DocVQA | 0 | ANLS | 89.4 |

---

### Instruction-Tuned Results

| Area | Test suite | Shots | Score type | Scout (bf16) |
|---|---|---:|---|---:|
| Image reasoning | MMMU | 0 | accuracy | 69.4 |
| Image reasoning | MMMU-Pro* | 0 | accuracy | 52.2 |
| Math-with-vision | MathVista | 0 | accuracy | 70.7 |
| Charts | ChartQA | 0 | relaxed accuracy | 88.8 |
| Document VQA | DocVQA (test) | 0 | ANLS | 94.4 |
| Code | LiveCodeBench (10/01/2024–02/01/2025) | 0 | pass@1 | 32.8 |
| Reasoning & knowledge | MMLU-Pro | 0 | macro-avg accuracy | 74.3 |
| Difficult QA | GPQA Diamond | 0 | accuracy | 57.2 |
| Multilingual math | MGSM | 0 | average EM | 90.6 |
| Long context | MTOB (half book) eng→kgv / kgv→eng | — | chrF | 42.2 / 36.6 |
| Long context | MTOB (full book) eng→kgv / kgv→eng | — | chrF | 39.7 / 36.3 |

\* MMMU-Pro is reported as an average across its sub-tracks.

### License

Llama 4 Scout uses the Llama 4 Community License. Llama 4 Scout is commercially usable with restrictions. Follow the Acceptable Use Policy for more details. 

### Risks

Risks of using Llama 4 include:

- Hallucinations
- Prompt injections
- Image safety issues

You can mitigate these issues with input and output filtering. You can also use [Llama Guard](https://www.llama.com/llama-protections/), retrieval grounding, and human-in-the-loop review processes.

### How to Run Locally

Check out the [Quick Start Guide](quick-start.md) to learn how to use Llama 4 Scout.