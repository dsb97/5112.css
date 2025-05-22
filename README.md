# 🌄 5112.css *(still in super early stage of development)*

**A web experience styled like Windows Vista Beta 1 (Build 5112)**

Do you remember the iconic look of Windows Vista during its early development?  
**5112.css** is a pure CSS framework that faithfully tries to recreate the UI style of **Windows Vista Beta 1 (Build 5112)** for use in modern web projects. Perfect for retro-inspired pages, UI mockups, or just pure geek nostalgia.

> 🧠 This project was inspired by [7.css](https://khang-nd.github.io/7.css/), an amazing CSS library that mimics Windows 7’s interface.

## ✨ Features

- 🎨 Authentic recreation of **Windows Vista Beta 1 (5112)** visual style  
- 🧱 Custom-styled native HTML elements (buttons, inputs, windows...)  
- 💻 No dependencies  
- ⚡ Lightweight and minimal  
- 🛠️ Easy to integrate: compile the SCSS, link the CSS

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/dsb97/5112.css.git
```

### 2. Compile the SCSS

Make sure you have Sass installed:

```bash
npm install -g sass
```

Then compile:

```bash
sass index.scss 5112.css
```

### 3. Link the CSS in your project

```html
<link rel="stylesheet" href="5112.css">
```

That’s it! Your HTML elements will now adopt the retro Vista look.

## 🧩 Basic Example

You can see a live example at: 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Vista 5112 Demo</title>
    <link rel="stylesheet" href="5112.css">
</head>

<body>
    <input type="checkbox" name="checkboxes" id="checkbox1">
    <label for="checkbox1">I agree to Microsoft's terms and conditions</label>
    <br>
    <input type="checkbox" name="checkboxes" id="checkbox2">
    <label for="checkbox2">I agree to share device information with Microsoft for diagnostic purposes</label>
    <br>
    <br>
    <input type="button" class="active" value="Accept" />
    <input type="button" value="Cancel" />
    <input disabled type="button" value="Apply" />
</body>

</html>
```

## 📁 Project Structure

```
5112.css/
├── images/          # Visual resources (not used yet)
│   └── glass.png
├── _buttons.scss
├── _checkboxes.scss
├── _variables.scss
├── _window.scss
├── index.scss       # Main file
└── test.html        # Example usage
```

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Want to suggest improvements or contribute?  
Feel free to open an *issue* or submit a *pull request*!
