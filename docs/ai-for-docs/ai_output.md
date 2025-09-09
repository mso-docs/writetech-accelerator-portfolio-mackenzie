# AI Output

## AI Prompt

I used ChatGPT to create a prompt for the project, based on the Step-by-Step instructions from our Assignment Google Doc:

```powershell
Using the official Llama 4 docs/model cards (Scout & Maverick) and the Ollama library page, produce a concise outline covering: (1) purpose & intended use, (2) architecture (MoE, multimodality) and context windows, (3) supported languages, (4) benchmark highlights (MMLU‑Pro, MMMU, GPQA‑Diamond, MGSM, LiveCodeBench), (5) licensing/acceptable‑use notes, (6) key risks/limitations & recommended mitigations (Prompt Guard/Llama Guard), and (7) how to run llama4:scout with Ollama on Windows. Keep it to bullet points, 200–300 words. Cite sources inline for me to build a bibliography."
```

I used this prompt to immediately prompt ChatGPT in a new chat. You can see the response below.

## AI Response

ChatGPT returned the following output:

```powershell

* **Purpose & intended use.** General-purpose, natively multimodal assistants for text + image: chat, visual recognition, image reasoning, captioning, and VQA; pretrained checkpoints can be adapted for broader NLG. ([Hugging Face][1])

* **Architecture & context windows.** Mixture-of-Experts (MoE) with early-fusion multimodality. Two variants: **Scout** (17B active / 109B total) with **\~10M** token context; **Maverick** (17B active / 400B total) with **\~1M** token context. ([Hugging Face][1])

* **Supported languages.** Arabic, English, French, German, Hindi, Indonesian, Italian, Portuguese, Spanish, Tagalog, Thai, Vietnamese (training spans more, but these are the supported set). ([Ollama][2], [Hugging Face][3])

* **Benchmark highlights (instruction-tuned).**
  • **MMLU-Pro:** Scout **74.3**, Maverick **80.5**.
  • **MMMU:** Scout **69.4**, Maverick **73.4**.
  • **GPQA-Diamond:** Scout **57.2**, Maverick **69.8**.
  • **MGSM (multilingual GSM8K):** Scout **90.6**, Maverick **92.3**.
  • **LiveCodeBench (10/2024–02/2025):** Scout **32.8**, Maverick **43.4**. ([Hugging Face][3])

* **Licensing & acceptable-use.** Released under the **Llama 4 Community License** (custom commercial) with separate **Acceptable Use Policy**; see linked license in Ollama library page as well. ([Hugging Face][3], [Ollama][2])

* **Key risks / limitations & mitigations.** Meta flags critical risks (e.g., CBRNE, child safety, cyber-enablement) and recommends **system-level safeguards**: **Llama Guard** (policy enforcement) and **Prompt Guard** (prompt/response filtering); evaluate in-context and fine-tune safety to your domain. ([Hugging Face][1])

* **How to run `llama4:scout` with Ollama on Windows.**

  1. Install Ollama for **Windows** (Download link in README). 2) Open **PowerShell** or **Command Prompt**. 3) Pull/run: `ollama run llama4:scout` (first run will download the \~Q4 quantized build) ; optionally `ollama pull llama4:scout` then `ollama run llama4:scout "Your prompt"` . 4) For model info: `ollama show llama4:scout`. ([GitHub][4], [Ollama][2])

* **Also see (official model cards).** Llama 4 Scout / Maverick cards provide intended use, training data (\~40T / \~22T tokens) and safeguards. ([Hugging Face][1])

[1]: https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E "meta-llama/Llama-4-Scout-17B-16E · Hugging Face"
[2]: https://ollama.com/library/llama4%3Ascout "llama4:scout"
[3]: https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct "meta-llama/Llama-4-Scout-17B-16E-Instruct · Hugging Face"
[4]: https://github.com/ollama/ollama "GitHub - ollama/ollama: Get up and running with OpenAI gpt-oss, DeepSeek-R1, Gemma 3 and other models."

```
