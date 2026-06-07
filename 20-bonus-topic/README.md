# React – Child to Parent Communication
 
Passing a state setter from parent to child so the child can update parent's state.
 
## How it works
 
1. Parent (`App.jsx`) creates state and passes `setTheme` as a prop
2. Child (`Navbar.jsx`) calls `props.setTheme('Dark')` on button click
3. Parent's state updates and re-renders
## Flow
 
```
Navbar (Child)  --setTheme('Dark')-->  App (Parent)
```
 
## Run
 
```bash
npm install
npm run dev
```
 