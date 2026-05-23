import Card from "./Components/Card"

function App() {
  
  return (
    <div className="parent">
        <Card username = "Yash" age={21} img = "https://images.unsplash.com/photo-1777047023536-8e47688b77f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card username = "Sumit" age={20} img = "https://images.unsplash.com/photo-1778003586700-6300af8182f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <Card username = "Vikku" age={24} img = "https://images.unsplash.com/photo-1774905171855-3bcc7aafd33e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 
        <Card username = "Rajesh" age={18} img = "https://images.unsplash.com/photo-1778525211398-83a1389ddda8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
