# React Forms & useState Notes

## useState kya hota hai?

State ek aisa variable hota hai jo **change hone par screen ko automatically update karta hai!**

```jsx
const [title, setTitle] = useState('')
//     ↑           ↑              ↑
//  value       update fn     starting value
```

> **Rule:** State change karni ho toh hamesha `set` function use karo — seedha `title = 'kuch'` mat karo!

---

## Controlled Input kya hota hai?

Jab input ki value React ke haath mein ho — `useState` se control ho — use **Controlled Input** kehte hain.

```jsx
const [title, setTitle] = useState('')  // state banai

<input
  value={title}           // input ki value state se aa rahi hai
  onChange={(e) => {
    setTitle(e.target.value)  // user type kare to state update hoti hai
  }}
/>
```

**Flow:**
```
User type karta hai
      ↓
onChange fire hota hai
      ↓
setTitle se state update hoti hai
      ↓
input ki value update hoti hai
```

---

## e.preventDefault() kya karta hai?

Form submit hone par browser **page reload** kar deta hai by default.  
`e.preventDefault()` ye reload rokta hai!

```jsx
const submitHandler = (e) => {
  e.preventDefault()  // ← page reload nahi hoga
  console.log("Form Submitted....", title)
  setTitle('')  // ← submit ke baad input clear ho jayega
}
```

> **Yaad rakh:** Forms mein hamesha `e.preventDefault()` lagao warna page reload ho jayega!

---

## onSubmit kaise use karte hain?

```jsx
// Function alag banake pass karna:
<form onSubmit={(e) => {
  submitHandler(e)   // e pass karna zaroori hai!
}}>

// Ya seedha bhi likh sakte ho:
<form onSubmit={submitHandler}>
```

---

## Poora Code — Ek Nazar Mein

```jsx
import { useState } from 'react'

function App() {

  // 1. State banai — title ke liye
  const [title, setTitle] = useState('')

  // 2. Submit handler — form submit hone par chalega
  const submitHandler = (e) => {
    e.preventDefault()              // page reload rokna
    console.log("Submitted:", title) // value console mein dekhna
    setTitle('')                    // input clear karna
  }

  return (
    <div>
      <form onSubmit={(e) => { submitHandler(e) }}>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={title}              // controlled input
          onChange={(e) => {
            setTitle(e.target.value) // har keystroke pe state update
          }}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
```

---

## Quick Revision

| Cheez | Kaam |
|---|---|
| `useState('')` | Empty string se state shuru karna |
| `value={title}` | Input ko state se control karna |
| `onChange` | Har keystroke pe state update karna |
| `e.preventDefault()` | Page reload rokna |
| `setTitle('')` | Submit ke baad input clear karna |
| `onSubmit` | Form submit hone par function chalana |
