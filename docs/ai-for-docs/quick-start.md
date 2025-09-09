# Quick Start Guide: Setting Up Ollama and Llama 4 Scout

## Requirements

You will need:

- Ollama (Windows)
- Meta Llama 4 Scout (17B-16E)
- At least 67 GB of space on your computer

>**NOTE:**<p></p>
If your computer does not meet the memory or GPU requirements, we recommend the following models:
>- Llama 4 Maverick (~245 GB, 1M context window)
>- Llama 4 16x17b (~67 GB, similar to Scout)
>- Llama 4 128x17b (~245 GB, similar to Maverick)

## Getting Started

You can follow the steps below to get started with Ollama and Llama 4 Scout.

### Step 1: Install Ollama (Windows 10/11).

Download the Windows installer from the [Ollama Website](https://ollama.com).

Once downloaded, open the installer and click ``Install`` to start the process. The installer will run in the background.

### Step 2: Pull the Model.

Once you've installed Ollama, you will need to pull the model of your choice.

>**NOTE:**<p>
></p>For this exercise, we recommend using Llama 4 Scout.

To pull the model, open up Windows PowerShell. We recommend running it in ``Administrator`` mode, since user mode may have issues with the install.

Once you're in Windows PowerShell, enter the following command:

```powershell
ollama pull llama4:scout
```


>**NOTE:**<p></p> You will need a lot of memory to run Llama 4 from your computer:
> - The Llama 4 Scout package requires ~67 GB of memory. 
> - The context window allows 10M tokens for text and image inputs.
> <p></p>Llama 4 runs on CPU, so it requires a high load. It may take a long time for Llama 4 to run your model. You can increase model speed by setting up your GPU to handle Llama 4.

#### Troubleshooting

If you can't run the command, Ollama may not be installed. In PowerShell, you can verify if it is installed by inputting the following command:

```powershell
ollama --version
```

PowerShell should output a message if Ollama has been properly installed:

```powershell
ollama version is 0.11.10
```

If PowerShell did not return a message, try downloading the model again:

```powershell
ollama pull llama4:scout
```

### Step 3: Check Your Pull.

To confirm the download was successful, run the following:

```powershell
ollama list
```

This should return a message listing all of your Ollama pulls, including any from other models:

```powershell
NAME            ID              SIZE     MODIFIED
llama4:scout    bf31604e25c2    67 GB    8 minutes ago
```

### Step 4: Chat With Your Model.

Run the following command in PowerShell:

```powershell
ollama run llama4:scout
```

The model will run for a few seconds, then it will display the following prompt:

```powershell
 >>> Send a message (/? for help)
```

Let's type ``/?`` to see what Ollama can do:

```powershell
>>> /?
```

This opens up a list of available commands:

```powershell
Available Commands:
  /set            Set session variables
  /show           Show model information
  /load <model>   Load a session or model
  /save <model>   Save your current session
  /clear          Clear session context
  /bye            Exit
  /?, /help       Help for a command
  /? shortcuts    Help for keyboard shortcuts

Use """ to begin a multi-line message.
Use \path\to\file to include .jpg, .png, or .webp images.
```

#### Set Information Example

Let's ask Llama 4 a sample question, to ensure it is functioning as intended:

```powershell
>>> Can you summarize Quantum Physics in a paragraph?
```

It responded with:

```powershell
Quantum physics is a branch of physics that explores the behavior of matter and energy at an atomic and subatomic
level. At these scales, the classical laws of physics no longer apply, and strange, seemingly random phenomena
govern the behavior of particles. Quantum objects, such as electrons and photons, can exist in multiple states
simultaneously, and their properties are described by probabilities rather than definite values. This leads to
phenomena like superposition, entanglement, and wave-particle duality, which challenge our intuitive understanding
of reality. Quantum physics has been experimentally verified numerous times and forms the basis for many modern
technologies, including transistors, lasers, and computer chips. Despite its success, quantum physics remains a
complex and counterintuitive field, with many open questions and areas of ongoing research.
```

Llama 4 can handle static requests, specifically if they fall before the knowledge cutoff in August 2024.

#### Real-Time Information Example
Let's ask Llama 4 to tell us the weather in a specific place:

```powershell
>>> what is the weather in Las Cruces, NM?
```

It responded with:

```powershell
I'm sorry, I don't have real-time information, but I can suggest some ways for you to find out the current weather
in Las Cruces, NM. You can:

* Check a weather website or app, such as AccuWeather, Weather.com, or Google Weather
* Look up the current weather on a search engine, such as Google
* Tune into a local news station or radio station for current weather conditions

If you'd like, I can also provide general information about the climate in Las Cruces, NM, or help you find
resources for weather forecasts.
```

Ollama cannot display real-time information, since it is locally running on your PC. This is why it responded in this way.

#### Image Creation Example
Try asking Llama 4 if it can make an image:

```powershell
>>> Can you make images?
```

It responded with:

```powershell
I can generate simple images using text-based art or describe images, but I'm not capable of creating complex
visual images like photographs or graphics. I can try to create simple images using ASCII art, for example.

If you're looking for more advanced image creation, I can suggest some alternatives:

* Text-to-image models like DALL-E or Midjourney, which can generate images based on text prompts.
* Graphic design software like Canva or Adobe Creative Cloud, which can help you create custom images.
* Online image editing tools like Pixlr or GIMP, which offer a range of editing features.

Let me know if there's anything else I can help with!
```

Therefore, you cannot use Llama 4 to generate images from text, unless you were using it to make ASCII art like this:

```powershell
Here's a simple ASCII wolf:

 /_/\
( o.o )
 > ^ <

I hope you like it!

Would you like me to try making a different ASCII art creature?
```

#### New Information Example

Try asking Llama 4 to learn new information:
```powershell
>>> can i teach you new information? for example, could I give you a recent physics study and train you off of that?
```

It responded:
```powershell
I'm designed to learn and improve over time, and I can definitely benefit from new information and updates.

You can share the recent physics study with me, and I'll do my best to understand and incorporate the information
into my knowledge base. Keep in mind that I'm a large language model, I don't have a traditional "training"
process like machine learning models do, but I can still learn and improve through interactions like this.

Some ways you can share the information with me include:

* Providing a summary or abstract of the study
* Sharing a link to the study or a related article
* Describing the key findings and implications of the study

Please go ahead and share the study with me, and I'll do my best to understand and learn from it!
```

Try giving it a recent physics study from August 21, 2025:

```powershell
>>> Here is the article: https://www.nature.com/articles/s41567-025-03002-8
```

It responded with:

```powershell
Thank you for sharing the article!

The article appears to be a scientific paper titled "Observation of a symmetry-protected topological phase of
interacting bosons with Rydberg atoms" published in Nature Physics.

I'll do my best to understand the content and provide insights. However, please note that I'm a large language
model, I'm not a domain expert in physics, and my understanding may not be as nuanced as a specialist in the
field.

If you'd like, I can try to:

* Summarize the main findings of the paper
* Explain the key concepts and terminology used
* Discuss the implications of the research

Please let me know how I can help!
```

A hallucination (incorrect title) had to be corrected in the following reply to Llama 4:

```powershell
>>> Summarize and discuss the implications of the research. The article title is "Universal Quantum Gate Set for Gottesm
... an-Kitaev-Preskill logical Qubits" not what you had previously written.
```

Then, Llama 4 responded:

```powershell
The article you provided is titled "Universal Quantum Gate Set for Gottesman-Kitaev-Preskill logical Qubits" and
was published in Nature.

Here's a summary:

The researchers have demonstrated a universal set of quantum gates for logical qubits encoded using the
Gottesman-Kitaev-Preskill (GKP) code. The GKP code is a method for encoding quantum information in a way that's
robust against errors, which is essential for large-scale quantum computing.

The study shows that it's possible to perform a universal set of quantum gates on GKP-encoded qubits, which means
that any quantum computation can be performed using these gates. The researchers achieved this by developing a new
protocol that allows for the implementation of GKP-based quantum gates with high fidelity.

The implications of this research are significant:

1. **Advancements in quantum error correction**: The GKP code is a promising approach to quantum error correction,
and this study demonstrates its potential for large-scale quantum computing.
2. **Universal quantum computing**: The ability to perform a universal set of quantum gates on GKP-encoded qubits
brings us closer to achieving universal quantum computing, which could enable simulations of complex quantum
systems and solve problems that are intractable with classical computers.
3. **Practical applications**: This research has the potential to enable practical applications of quantum
computing, such as quantum simulation, machine learning, and optimization problems.

Overall, this study represents an important step forward in the development of robust and scalable quantum
computing architectures.

```

As you can see, it took a few tries to get Llama 4 to do as intended. However, Llama 4 was able to successfully summarize a recent article.

## Next Steps
Now that you've successfully prompted Llama 4, keep sending it prompts to see all of its capabilities. You can also check out the [Model Card](model_card.md) to learn more about it.

---
