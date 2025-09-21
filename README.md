# ts-video-cli 📼

A simple **command-line tool** written in **pure TypeScript** for converting videos into different formats using **FFmpeg**.  
The project was built without any Node.js frameworks — only TypeScript — to focus on strong typing, clean code, and simplicity.  

---

## ✨ Features
- Written in **pure TypeScript**, no Node.js frameworks  
- Uses **FFmpeg** under the hood for powerful video conversion  
- **Resizes videos** by specifying width & height  
- Interactive CLI prompts for easy usage  
- Lightweight — no server, no complex setup  

---

## ⚙️ Installation

```bash
git clone https://github.com/ViacheslavOl/ts-video-cli.git
cd ts-video-cli
npm install
npm run build
```
Make sure FFmpeg is installed and available in your PATH:
👉 Download FFmpeg https://ffmpeg.org/download.html

---

## ▶️ Usage
Run the CLI with:

```bash
npm start
```
You will be prompted to enter:
- Width → video width
- Height → video height
- Path to file → input video file (e.g. ./test20mb.mov)
- Name → output file name (e.g. res.mp4)

---

## Example session
```bash
✔ Width: 1280
✔ Height: 720
✔ Path to file: ./test20mb.mov
✔ Name: res.mp4
```
✅ Result: a new file res.mp4 will be created in the project folder, resized to 1280x720.

---

## 💡 Why Pure TypeScript?
This project was intentionally built in pure TypeScript without Node.js frameworks to:
- Focus on mastering TypeScript itself
- Keep it lightweight and dependency-free
- Provide a flexible CLI that can be integrated into other workflows
