<div align="center">

# ⚛️ React.js Projects Collection

A curated collection of React.js projects showcasing my journey and growth as a frontend developer — from fundamental concepts to real-world applications.

> **Note:** This repository contains only a selection of my projects. Some personal/client projects are kept private to protect source code.

[![React](https://img.shields.io/badge/React-18%2F19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Powered-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styled-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Table of Contents

- [⚛️ React.js Projects Collection](#️-reactjs-projects-collection)
  - [📋 Table of Contents](#-table-of-contents)
  - [🔎 Overview](#-overview)
  - [🚀 Projects](#-projects)
    - [1. 🤖 AI Chat Bot](#1--ai-chat-bot)
    - [2. 🎨 Background Changer](#2--background-changer)
    - [3. 🖼️ Image Slider](#3-️-image-slider)
    - [4. 🎟️ Lottery Ticket](#4-️-lottery-ticket)
    - [5. 🎟️ Lottery Ticket — Modified](#5-️-lottery-ticket--modified)
    - [6. 🔐 Strong Password Generator](#6--strong-password-generator)
    - [7. ✅ Todo App](#7--todo-app)
    - [8. ✅ Todo App — localStorage](#8--todo-app--localstorage)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [⚡ Getting Started](#-getting-started)
  - [👨‍💻 Author](#-author)

---

## 🔎 Overview

| # | Project | Description | Complexity |
|:-:|---------|-------------|:----------:|
| 1 | **AI Chat Bot** | Gemini-powered personal portfolio chatbot | ⭐⭐⭐ |
| 2 | **Background Changer** | One-click viewport background color switcher | ⭐ |
| 3 | **Image Slider** | Swiper.js-based responsive image carousel | ⭐⭐ |
| 4 | **Lottery Ticket** | Random digit generator with win-condition logic | ⭐ |
| 5 | **Lottery Ticket — Modified** | Refactored version with component decomposition | ⭐⭐ |
| 6 | **Strong Password Generator** | Configurable password tool with dark/light mode | ⭐⭐⭐ |
| 7 | **Todo App** | Classic CRUD todo list | ⭐⭐ |
| 8 | **Todo App — localStorage** | Persistent todo app with Context API | ⭐⭐⭐ |

---

## 🚀 Projects

### 1. 🤖 AI Chat Bot

An AI-powered chatbot widget that leverages the **Google Gemini API** to answer questions about me. It acts as a personal portfolio assistant, pre-loaded with my background, skills, and social links as system context.

**Features:**
- Floating toggle button that expands into a full chat popup
- Maintains full conversation history for contextual responses
- "Thinking..." indicator while awaiting API response
- Auto-scroll to latest message
- Responsive design — full-screen on mobile, popup on desktop

**Tech:** React 18 · Vite · Tailwind CSS · Google Gemini API · Font Awesome

---

### 2. 🎨 Background Changer

A minimal app that switches the viewport background color with a single click from a palette of 11 preset colors.

**Features:**
- 11 color options — Red, Green, Blue, Gray, Olive, Orange, Yellow, Purple, Pink, White, Black
- Smooth 150ms CSS transition on color change
- Color-swatch styled buttons with shadow effects

**Tech:** React 18 · Vite · Tailwind CSS

---

### 3. 🖼️ Image Slider

A responsive image carousel built with **Swiper.js**, featuring three different slider variants — full-width navigation slider, multi-slide free-mode slider, and a navigable multi-slide slider.

**Features:**
- Full-width single-slide carousel with pagination & navigation arrows
- Multi-slide free-mode scrolling variant
- Infinite loop support
- Modular Swiper architecture (Navigation, Pagination, FreeMode)

**Tech:** React 18 · Vite · Swiper 10 · CSS

---

### 4. 🎟️ Lottery Ticket

A lottery ticket simulator that generates random digits, sums them, and checks whether the total hits the winning number (15).

**Features:**
- Generates 3 random digits (0–9) per ticket
- Displays sum and win/loss result
- Clean dark-themed card UI
- One-click ticket regeneration

**Tech:** React 19 · Vite · Tailwind CSS

---

### 5. 🎟️ Lottery Ticket — Modified

A refactored and improved version of the Lottery Ticket app, demonstrating **component decomposition** and **configurable game logic** via props.

**Features:**
- Broken into reusable components: `LotteryTicket`, `Ticket`, `TicketNum`, `Button`
- Configurable number of digits via `n` prop
- Pluggable win-condition callback — easily swap game rules
- Generates ticket on first render

**Tech:** React 19 · Vite · Tailwind CSS

---

### 6. 🔐 Strong Password Generator

A full-featured password generator with a polished UI, configurable options, clipboard support, and a dark/light mode toggle.

**Features:**
- Configurable password length (4–30 characters) via range slider
- Toggle inclusion of numbers, lowercase, uppercase, and special symbols
- One-click copy to clipboard
- Dark / Light mode with smooth gradient transitions
- Informational "About" section on password strength best practices
- Branded footer with portfolio links

**Tech:** React 18 · Vite · Tailwind CSS (dark mode) · Clipboard API · Font Awesome

---

### 7. ✅ Todo App

A classic CRUD to-do list application for adding, deleting, and transforming tasks.

**Features:**
- Add and delete individual tasks
- Delete all tasks at once
- Convert individual or all tasks to uppercase
- Unique task IDs via `uuid`

**Tech:** React 18 · Vite · Tailwind CSS · uuid

---

### 8. ✅ Todo App — localStorage

An advanced evolution of the Todo App featuring **persistent storage** and **React Context API** for scalable state management.

**Features:**
- Todos persist across page refreshes via `localStorage`
- Centralized state with `Context API` — `addTodo`, `editTodo`, `deleteTodo`, `toggleComplete`
- Inline editing — click edit to modify a todo's text in place
- Completion toggle with visual feedback (green background + strikethrough)
- Clean component separation: `TodoForm`, `TodoItem`

**Tech:** React 19 · Vite · Tailwind CSS · React Context API · uuid · localStorage

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Library** | React 18 / 19 |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS, Custom CSS |
| **State Management** | useState, Context API |
| **APIs** | Google Gemini API, Clipboard API |
| **Packages** | Swiper.js, uuid, Font Awesome |
| **Persistence** | localStorage |

</div>

---

## ⚡ Getting Started

Each project is self-contained with its own `package.json`. To run any project locally:

```bash
# 1. Clone the repository
git clone https://github.com/iamchandanchaudhary/Pojects-using-React.git

# 2. Navigate into a project folder
cd Pojects-using-React/strong-password-generator   # (example)

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

> **Prerequisite:** Node.js 18+ and npm installed on your machine.

> **Note:** The AI Chat Bot project requires a Google Gemini API key. Create a `.env` file in the project root with:
> ```
> VITE_API_URL=your_gemini_api_key
> ```

---

## 👨‍💻 Author

<div align="center">

**Chandan Chaudhary**

Full Stack Developer & Freelancer · BCA Student

[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=for-the-badge&logo=vercel&logoColor=white)](https://chandanchaudhary-portfolio.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iamchandanchaudhary)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@c2explains)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:chandanchaudhary533@gmail.com)

</div>

---

<div align="center">

⭐ **If you found this helpful, consider giving the repo a star!** ⭐

</div>