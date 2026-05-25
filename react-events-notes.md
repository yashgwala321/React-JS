# React Events Notes

## Functions — 2 tarike likhne ke

```jsx
// Normal Function
function btnCliked() {
  console.log("clicked")
}

// Arrow Function
const btnCliked = () => {
  console.log("clicked")
}
```

> **Rule:** Dono same kaam karte hain React mein — jo pasand aaye use karo!

---

## 1. onClick — Button click hone par

```jsx
const btnCliked = () => {
  console.log("button click")
}

// Function pass karke
<button onClick={btnCliked}>Click</button>

// Inline likhke
<button onClick={function() {
  console.log("Hello Guys")
}}>Click</button>
```

---

## 2. onMouseEnter — Mouse andar aane par

```jsx
const mouseEnter = () => {
  console.log("Mouse Entered!")
}

<button onMouseEnter={mouseEnter}>Hover me</button>
```

---

## 3. onClick on Input — Input par click hone par

```jsx
<input onClick={function() {
  console.log("Input par click hua hai")
}} type="text" placeholder="Input Clicked" />
```

---

## 4. onChange — User type karte waqt

```jsx
// Sirf event detect karna
<input onChange={function() {
  console.log("User type kar raha hai")
}} type="text" />

// Value lena directly
<input onChange={function(e) {
  console.log(e.target.value)
}} type="text" />

// Value kisi function mein pass karna
const funPass = (val) => {
  console.log(val)
}

<input onChange={function(e) {
  funPass(e.target.value)
}} type="text" placeholder="Enter Name" />
```

> **Yaad rakh:** `e.target.value` se user ki typing milti hai real-time

---

## 5. onMouseMove — Mouse hilne par

```jsx
<div onMouseMove={(e) => {
  console.log(e.clientX)  // X position
  console.log(e.clientY)  // Y position
}} className="box">
</div>
```

> **`e.clientX`** = mouse ki horizontal position  
> **`e.clientY`** = mouse ki vertical position

---

## 6. onWheel — Page scroll hone par

```jsx
const pagescrolling = (e) => {
  if (e > 0) {
    console.log("Sidha Scroll...")  // neeche scroll
  } else {
    console.log("Ulta Scroll...")   // upar scroll
  }
}

<div onWheel={(e) => {
  pagescrolling(e.deltaY)
}}>
  <div className="page1"></div>
  <div className="page2"></div>
  <div className="page3"></div>
</div>
```

> **`e.deltaY`** positive = neeche scroll, negative = upar scroll

---

## Event Object (e) — Quick Reference

| Property | Kya milta hai |
|---|---|
| `e.target.value` | Input mein jo user ne likha |
| `e.clientX` | Mouse ki X position |
| `e.clientY` | Mouse ki Y position |
| `e.deltaY` | Scroll kitna hua (+ ya -) |

> **Note:** `e` ka naam kuch bhi rakh sakte ho — `ele`, `event`, `ev` — sab same kaam karta hai!

---

## Saare Events — Ek Nazar Mein

| Event | Kab use hota hai |
|---|---|
| `onClick` | Click hone par |
| `onMouseEnter` | Mouse element par aane par |
| `onMouseMove` | Mouse hilne par |
| `onChange` | Input mein type karne par |
| `onWheel` | Scroll karne par |
