[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

# React Confession Board (Bun + Vite)

This project is a React application using **Vite** and powered by **Bun** as the package manager & JavaScript runtime.


## Requirements

Before starting, make sure **Bun** is installed on your system.


## Installing Bun

### **Windows**

> Currently, Bun on Windows runs via **Windows Subsystem for Linux (WSL)** or **Docker**.

1. **Install WSL**

   ```bash
   wsl --install
   ```

   Choose a Linux distribution like **Ubuntu** during setup.

2. **Open WSL**

   ```bash
   wsl
   ```

3. **Install Bun**

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

4. Restart your shell and verify installation:
   ```bash
   bun --version
   ```

### **Linux (Ubuntu/Debian/Fedora/Arch)**

1. Open a terminal.
2. Run:
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```
3. Restart your terminal or run:
   ```bash
   source ~/.bashrc
   ```
4. Verify:
   ```bash
   bun --version
   ```


## Clone & Setup Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/username/react-confession-board.git
   cd react-confession-board
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```


## Run the Development Server

```bash
bun run dev
```

The project will be available at:

```
http://localhost:5173
```

## Build for Production

```bash
bun run build
```

The production build will be generated in the `dist` folder.

To preview the build:

```bash
bun run preview
```

---

## Tech Stack

- **React** + **Vite**
- **Tailwind CSS**
- **Styled Components**
- **Font Awesome**
- **react-draggable**
- **Bun** (package manager & runtime)

## License & Attribution
This project is licensed under the **GPL 3.0 License**.  
> [!IMPORTANT]  
> if you use or modify this project, you **must credit the original author**. Redistribution, modification, or use in other projects is allowed under GPL 3, **as long as the original author is acknowledged**.

