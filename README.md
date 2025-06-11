# LuminAI

Welcome to Lunimani, which allows you to choose the LLM that you use for each prompt! Currently, you can use OpenAI, Anthropic, Ollama, OpenRouter, Gemini, LMStudio, Mistral, xAI, HuggingFace, DeepSeek, or Groq models - and it is easily extended to use any other model supported by the Vercel AI SDK! See the instructions below for running this locally and extending it to include more models.


## Table of Contents

- [Requested Additions](#requested-additions)
- [Features](#features)
- [Setup](#setup)
- [Run the Application](#run-the-application)
- [Available Scripts](#available-scripts)

## Requested Additions

- ✅ OpenRouter Integration 
- ✅ Gemini Integration 
- ✅ Autogenerate Ollama models from what is downloaded 
- ✅ Filter models by provider 
- ✅ Download project as ZIP
- ✅ Improvements to the main LuminAI prompt in `app\lib\.server\llm\prompts.ts` 
- ✅ DeepSeek API Integration 
- ✅ Mistral API Integration 
- ✅ "Open AI Like" API Integration 
- ✅ Ability to sync files (one way sync) to local folder 
- ✅ Containerize the application with Docker for easy installation 
- ✅ Publish projects directly to GitHub 
- ✅ Ability to enter API keys in the UI 
- ✅ xAI Grok Beta Integration 
- ✅ LM Studio Integration
- ✅ HuggingFace Integration 
- ✅ LuminAI terminal to see the output of LLM run commands 
- ✅ Streaming of code output
- ✅ Ability to revert code to earlier version 
- ✅ Chat history backup and restore functionality 
- ✅ Cohere Integration 
- ✅ Dynamic model max token length 
- ✅ Better prompt enhancing 
- ✅ Prompt caching 
- ✅ Load local projects into the app 
- ✅ Together Integration
- ✅ Mobile friendly 
- ✅ Better prompt enhancing 
- ✅ Attach images to prompts 
- ✅ Added Git Clone button 
- ✅ Git Import from url 
- ✅ PromptLibrary to have different variations of prompts for different use cases 
- ✅ Detect package.json and commands to auto install & run preview for folder and git import 
- ✅ Selection tool to target changes visually
- ✅ Detect terminal Errors and ask luminAI to fix it 
- ✅ Detect preview Errors and ask LuminAI to fix it 
- ✅ Add Starter Template Options 
- ✅ Perplexity Integration 
- ✅ AWS Bedrock Integration 
- ✅ Add a "Diff View" to see the changes 
- ✅ Deploy directly to Netlify
- ✅ Popout Window for Web Container
- ✅ Ability to change Popout window size 

## Features

- **AI-powered full-stack web development** for **NodeJS based applications** directly in your browser.
- **Support for multiple LLMs** with an extensible architecture to integrate additional models.
- **Attach images to prompts** for better contextual understanding.
- **Integrated terminal** to view output of LLM-run commands.
- **Revert code to earlier versions** for easier debugging and quicker changes.
- **Download projects as ZIP** for easy portability Sync to a folder on the host.
- **Integration-ready Docker support** for a hassle-free setup.
- **Deploy** directly to **Netlify**

## Setup

If you're new to installing software from GitHub, don't worry! If you encounter any issues, feel free to submit an "issue" using the provided links or improve this documentation by forking the repository, editing the instructions, and submitting a pull request. The following instruction will help you get the stable branch up and running on your local machine in no time.

Let's get you up and running with the stable version of Bolt.DIY!

## Quick Download

- Download.zip File

## Prerequisites

Before you begin, you'll need to install two important pieces of software:

### Install Node.js

Node.js is required to run the application.

1. Visit the [Node.js Download Page](https://nodejs.org/en/download/)
2. Download the "LTS" (Long Term Support) version for your operating system
3. Run the installer, accepting the default settings
4. Verify Node.js is properly installed:
   - **For Windows Users**:
     1. Press `Windows + R`
     2. Type "sysdm.cpl" and press Enter
     3. Go to "Advanced" tab → "Environment Variables"
     4. Check if `Node.js` appears in the "Path" variable
   - **For Mac/Linux Users**:
     1. Open Terminal
     2. Type this command:
        ```bash
        echo $PATH
        ```
     3. Look for `/usr/local/bin` in the output

## Running the Application

You have two options for running Bolt.DIY: directly on your machine or using Docker.

### Option 1: Direct Installation (Recommended for Beginners)

1. **Install Package Manager (pnpm)**:

   ```bash
   npm install -g pnpm
   ```

2. **Install Project Dependencies**:

   ```bash
   pnpm install
   ```

3. **Start the Application**:

   ```bash
   pnpm run dev
   ```
   
### Option 2: Using Docker

This option requires some familiarity with Docker but provides a more isolated environment.

#### Additional Prerequisite

- Install Docker: [Download Docker](https://www.docker.com/)

#### Steps:

1. **Build the Docker Image**:

   ```bash
   # Using npm script:
   npm run dockerbuild

   # OR using direct Docker command:
   docker build . --target bolt-ai-development
   ```

2. **Run the Container**:
   ```bash
   docker compose --profile development up
   ```

## Configuring API Keys and Providers

### Adding Your API Keys

Setting up your API keys in Bolt.DIY is straightforward:

1. Open the home page (main interface)
2. Select your desired provider from the dropdown menu
3. Click the pencil (edit) icon
4. Enter your API key in the secure input field

![API Key Configuration Interface]

### Configuring Custom Base URLs

For providers that support custom base URLs (such as Ollama or LM Studio), follow these steps:

1. Click the settings icon in the sidebar to open the settings menu
   ![Settings Button Location]

2. Navigate to the "Providers" tab
3. Search for your provider using the search bar
4. Enter your custom base URL in the designated field
   ![Provider Base URL Configuration]
   
> **Note**: Custom base URLs are particularly useful when running local instances of AI models or using custom API endpoints.

### Supported Providers

- Ollama
- LM Studio
- OpenAILike

## Setup Using Git (For Developers only)

This method is recommended for developers who want to:

- Contribute to the project
- Stay updated with the latest changes
- Switch between different versions
- Create custom modifications

#### Prerequisites

1. Install Git: [Download Git](https://git-scm.com/downloads)

#### Initial Setup

1. **Clone the Repository**:

   ```bash
   git clone -b stable https://github.com/jenish01jiyani/LuminAI.git
   ```

2. **Navigate to Project Directory**:

   ```bash
   cd LuminAI
   ```

3. **Install Dependencies**:

   ```bash
   pnpm install
   ```

4. **Start the Development Server**:
   ```bash
   pnpm run dev
   ```

5. **(OPTIONAL)** Switch to the Main Branch if you want to use pre-release/testbranch:
   ```bash
   git checkout main
   pnpm install
   pnpm run dev
   ```
  Hint: Be aware that this can have beta-features and more likely got bugs than the stable release

>**Open the WebUI to test (Default: http://localhost:5173)**
>   - Beginngers: 
>     - Try to use a sophisticated Provider/Model like Anthropic with Claude Sonnet 3.x Models to get best results
>     - Explanation: The System Prompt currently implemented in LuminAI cant cover the best performance for all providers and models out there. So it works better with some models, then other, even if the models itself are perfect for >programming
>     - Future: Planned is a Plugin/Extentions-Library so there can be different System Prompts for different Models, which will help to get better results

#### Staying Updated

To get the latest changes from the repository:

1. **Save Your Local Changes** (if any):

   ```bash
   git stash
   ```

2. **Pull Latest Updates**:

   ```bash
   git pull 
   ```

3. **Update Dependencies**:

   ```bash
   pnpm install
   ```

4. **Restore Your Local Changes** (if any):
   ```bash
   git stash pop
   ```

#### Troubleshooting Git Setup

If you encounter issues:

1. **Clean Installation**:

   ```bash
   # Remove node modules and lock files
   rm -rf node_modules pnpm-lock.yaml

   # Clear pnpm cache
   pnpm store prune

   # Reinstall dependencies
   pnpm install
   ```

2. **Reset Local Changes**:
   ```bash
   # Discard all local changes
   git reset --hard origin/main
   ```

Remember to always commit your local changes or stash them before pulling updates to avoid conflicts.

---

## Available Scripts

- **`pnpm run dev`**: Starts the development server.
- **`pnpm run build`**: Builds the project.
- **`pnpm run start`**: Runs the built application locally using Wrangler Pages.
- **`pnpm run preview`**: Builds and runs the production build locally.
- **`pnpm test`**: Runs the test suite using Vitest.
- **`pnpm run typecheck`**: Runs TypeScript type checking.
- **`pnpm run typegen`**: Generates TypeScript types using Wrangler.
- **`pnpm run deploy`**: Deploys the project to Cloudflare Pages.
- **`pnpm run lint:fix`**: Automatically fixes linting issues.

