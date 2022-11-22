import Card from "./components/Card"
import './App.css'

function App() {

  const users = [
    {
      id: 1,
      firstName: "Revydo",
      lastName: "Renada",
      age: 22
    },
    {
      id: 2,
      firstName: "Unknown",
      lastName: "Unknown",
      age: 92
    },
    {
      id: 3,
      firstName: "Patrick",
      lastName: "Star",
      age: 47
    },
  ]

  return (
    <div className="App">
      {users.map(user => {
        return <Card firstName={user.firstName} lastName={user.lastName} age={user.age}/>
      })}
    </div>
  )
}

export default App
