---
title: "Building a Local-First AI Agent with Ollama and Astro"
description: "Learn how to build a fully local AI agent that can run in your browser, query local models using Ollama, and perform tasks without cloud APIs."
pubDate: 2026-05-20
author: "Ahsan Habib"
category: "Programming"
tags: ["AI Agents", "Ollama", "Astro", "TypeScript", "Local-First"]
heroImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80"
pinned: false
---

Cloud-based AI models like GPT-4 or Claude are extremely capable, but they come with costs, privacy concerns, and network latency. For many applications, running a **Local-First AI Agent** is a superior solution. 

In this tutorial, we will construct a lightweight, reactive AI agent using **Astro** for the frontend, running on **TypeScript**, and calling **Ollama** locally to handle LLM reasoning.

---

## Why Local-First AI?

* **Privacy**: Your data never leaves your machine. Perfect for handling proprietary code, system logs, or private diaries.
* **Cost**: Zero API token fees. You run as many requests as your GPU/CPU can handle.
* **Latency**: No round-trip internet requests.
* **Offline Capability**: Works on flights, trains, and in remote locations.

---

## Setting Up Ollama

First, install [Ollama](https://ollama.com) on your system. Once installed, pull a lightweight model suitable for agent tasks, such as `llama3` or `mistral`. For this guide, we'll use `llama3`:

```bash
ollama run llama3
```

By default, Ollama runs a local HTTP server at `http://localhost:11434`.

> [!IMPORTANT]
> If you are accessing Ollama from a web page running on `http://localhost:4321` (Astro's dev server), you need to configure Ollama to accept CORS requests. 
> Set the environment variable `OLLAMA_ORIGINS="*" ` before starting the Ollama service.

---

## Integrating Ollama in Astro

We can create an API route or query the endpoint directly from a client-side component. Since Astro allows Server-Side Rendering (SSR) or Static Site Generation (SSG), let's create a Client-Side Component that communicates directly with Ollama.

First, let's write our API helper in a TypeScript file:

```typescript
// src/utils/ollama.ts
export interface OllamaResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
}

export async function askLocalLLM(prompt: string, model = "llama3"): Promise<string> {
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        prompt: prompt,
        stream: false, // Set to true for streaming chunks
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: OllamaResponse = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error connecting to Ollama:", error);
    return "Failed to communicate with local model. Make sure Ollama is running and CORS is enabled.";
  }
}
```

---

## Creating the Agent Component

Now, let's create an interactive Astro component that implements a simple loop: **Sensors (Input) -> Thought -> Action (Output)**.

Create a file `src/components/AIAgent.astro`:

```html
---
// This runs on the server during build
---
<div class="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl max-w-2xl mx-auto">
  <h3 class="text-xl font-bold text-white mb-2">Local AI Research Assistant</h3>
  <p class="text-sm text-slate-400 mb-4">Input a topic, and the local agent will plan, analyze, and write a summary.</p>
  
  <div class="space-y-4">
    <input 
      type="text" 
      id="agent-input" 
      placeholder="e.g. Explaining Quantum Cryptography..." 
      class="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white rounded-xl focus:outline-none focus:border-cyan-500 transition-colors"
    />
    
    <button 
      id="run-agent-btn" 
      class="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform active:scale-95"
    >
      Run Agent Task
    </button>
  </div>

  <div id="agent-terminal" class="hidden mt-6 p-4 bg-black border border-slate-800 rounded-xl font-mono text-xs text-green-400 h-60 overflow-y-auto space-y-2">
    <!-- Agent execution logs will appear here -->
  </div>
</div>

<script>
  import { askLocalLLM } from '../utils/ollama';

  const inputEl = document.getElementById('agent-input') as HTMLInputElement;
  const btnEl = document.getElementById('run-agent-btn') as HTMLButtonElement;
  const terminalEl = document.getElementById('agent-terminal') as HTMLDivElement;

  function log(text: string, type: 'info' | 'thought' | 'action' | 'result' = 'info') {
    const p = document.createElement('p');
    let prefix = "[i]";
    if (type === 'thought') {
      p.className = 'text-yellow-400';
      prefix = "[THOUGHT]";
    } else if (type === 'action') {
      p.className = 'text-cyan-400';
      prefix = "[ACTION]";
    } else if (type === 'result') {
      p.className = 'text-white border-t border-slate-800 pt-2 mt-2';
      prefix = "[SUMMARY]";
    }
    p.textContent = `${prefix} ${text}`;
    terminalEl.appendChild(p);
    terminalEl.scrollTop = terminalEl.scrollHeight;
  }

  btnEl.addEventListener('click', async () => {
    const topic = inputEl.value.trim();
    if (!topic) return;

    terminalEl.classList.remove('hidden');
    terminalEl.innerHTML = ''; // Clear terminal
    
    log(`Initializing agent task: "${topic}"...`);
    
    // Step 1: Thinking
    log(`Deconstructing research question. Planning analysis modules.`, 'thought');
    
    // Step 2: Requesting Ollama
    log(`Executing query to local Llama3 instance...`, 'action');
    
    const prompt = `You are a research agent. Provide a concise, 3-sentence summary of: ${topic}`;
    const result = await askLocalLLM(prompt);
    
    log(`Model responded successfully.`, 'action');
    log(result, 'result');
  });
</script>
```

---

## Conclusion

Running AI workloads locally is no longer reserved for machine learning engineers. With tools like **Ollama** and frameworks like **Astro**, you can ship powerful web applications that process user data fully locally, keeping interactions private and completely free of operating costs.
