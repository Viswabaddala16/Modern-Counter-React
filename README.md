# React Modern Counter App

A clean, responsive, and functional counter application built with **React** and styled using a hybrid approach of **Standard CSS** and **Tailwind CSS**.

## 🚀 Features

- **Increment:** Increase the value by 1.
- **Decrement:** Decrease the value by 1.
- **Reset:** Instantly reset the counter to zero.
- **Dynamic Styling:** Responsive UI that looks great on all screen sizes.
- **Hybrid CSS Workflow:** Designed using custom CSS logic and converted to Tailwind CSS for optimized performance.

## 🛠️ Tech Stack

- **Framework:** [React.js](react.dev) (Functional Components & Hooks)
- **Styling:** 
  - [Tailwind CSS](tailwindcss.com) (Utility-first styling)
  - Custom CSS (Initial design phase)
- **State Management:** React `useState` Hook

## 💡 Learning Objectives

This project was built to master the following concepts:
1. **React State:** Managing numerical data using the `useState` hook.
2. **Event Handling:** Capturing user clicks to trigger mathematical logic.
3. **CSS Conversion:** The workflow of creating "Basic CSS" first and then converting it into "Tailwind Utility Classes" to understand the framework's behavior.

## 🏁 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository 2.Navigate to the project folder::**
   ```bash
   git clone github.com
2. **Navigate to the project folder::**

    cd your-repo-name
3. **Install dependencies:**

    npm install
4. **Run the development server:**
    npm run dev
    The app should now be running at http://localhost:5173 (if using Vite).
# 📖 How it Works
The app uses a single piece of state to track the count.
The increment function adds +1 to the state.
The decrement function subtracts -1.
The reset function sets the state back to 0.

const [count, setCount] = useState(0);

const add = () => setCount(count + 1);
const subtract = () => setCount(count - 1);
const reset = () => setCount(0);
Built with ❤️ as part of my React learning journey in 2025.
