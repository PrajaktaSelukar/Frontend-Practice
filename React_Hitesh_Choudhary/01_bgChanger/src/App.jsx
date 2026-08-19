import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded-3xl text-black">
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor("red")}
              style={{backgroundColor: "red"}}
            >Red</button>
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor("blue")} 
              style={{backgroundColor: "blue"}}
            >Blue</button>
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor("green")} 
              style={{backgroundColor: "green"}}
            >Green</button>
            <button     
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor("gray")} 
              style={{backgroundColor: "gray"}}
            >Gray</button>
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("yellow")}
              style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("pink")}
              style={{backgroundColor: "pink"}}
            >Pink</button>
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor("purple")} 
              style={{backgroundColor: "purple"}}
            >Purple</button>
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor("lavender")} 
              style={{backgroundColor: "lavender"}}
            >Lavender</button>
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor("white")} 
              style={{backgroundColor: "white"}}
            >White</button>
            <button 
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
              onClick={() => setColor("black")} 
              style={{backgroundColor: "black"}}
            >Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
