# Chatbot Styles

All styles and HTML modifications have been made through the `main.js` file.

---

## ✨ Modified Styles

- **`#dfTitlebar h2`**  
  `font-weight: 400px;`

- **`#messageList .message`**  
  `font-family: Google Sans, Helvetica Neue, sans-serif;`

- **`.df-chips-wrapper .chip`**  
  `border-radius: 24px;`  
  **Hover Transition:** `box-shadow` added

- **`.df-chips-wrapper a, button`, `.title`**  
  `color: #000;`

- **`.title-wrapper`**  
  `border-radius: 5px 5px 0 0;`

- **`.chat-wrapper`**  
  `border-radius: 4px;`

- **`.input-container`**  
  `border-radius: 0 0 4px 4px;`

- **`#sendIcon:hover`**  
  `fill: green;`

- **`.input-box-wrapper`**  
  `border-top: 2.5px solid #fff;`

- **`img`**  
  `border-radius: 10px 10px 24px 24px;`

- **`button#widgetIcon`**  
  `border-radius: 50%;`

- **`#descriptionWrapper`**  
  `border-radius: 8px;`

- **`.image`**  
  `margin-right: 24px;`  
  `max-height: 24px;`  
  `max-width: 24px;`  
  `background-size: 32px;`  
  `padding-right: 24px;`

---

## ➕ Added Styles

- **`.subtitle`**  
  `line-height: 1.4;`

- **`.input-container input`**  
  `font-family: GT Maru, sans-serif;`

- **`.message-list-wrapper.minimized`**  
  `border-radius: 24px;`

- **`.chat-min df-message-list`**  
  `background-color: transparent;`

- **`.chat-min`**  
  `background-color: var(--df-messenger-button-titlebar-color);`

- **`button#widgetIcon`**  
  `transform: 0.2s cubic-bezier(0.47, 1.64, 0.41, 0.8);`  
  `hover: transform: scale(1.2);`

- **`.chat-wrapper.chat-open`**  
  `border: 3px solid var(--df-messenger-button-titlebar-color);`

- **`#dfButtonAnchorWrapper, #dfButtonWrapper`**  
  `padding-left: 14px;`

- **`.description-line`**  
  `line-height: 1.4;`

- **`.image`**  
  `background-position: center;`  
  `height: 32px;`

- **`#messageList .message.bot-message`**  
  `border: 4px solid var(--df-messenger-font-color);`

- **`.text-container`**  
  `display: flex;`  
  `flex-direction: column;`  
  `gap: 8px;`

- **`.title`**  
  `line-height: 1.5;`

---

## 🛠 HTML Modifications

- **Replaced Send Icon**  
  Custom SVG used for `#sendIcon`.

- **Added Title Bar Icon**  
  Inserted a `<div>` with class `titlebar-ctr`, containing an `<img>` with class `chat-titlebar-icon`, inside `.titlebar-wrapper`.
