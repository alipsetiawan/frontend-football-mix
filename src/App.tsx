// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
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
