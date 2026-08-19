import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    // if (passwordRef.current) {
    //   passwordRef.current.select();
    //   document.execCommand('Copy');
    // }
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 text-orange-500 bg-gray-700"
      >
        <h1 className="text-white text-center my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3 bg-white text-gray-400"
            placeholder="Generated Password"
            ref={passwordRef}
          />
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input 
              type='range' 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)} 
            />
            <label htmlFor='length' className='text-white'>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setNumberAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={characterAllowed}
                id="characterInput"
                onChange={() => {
                    setCharacterAllowed((prev) => !prev )
                }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
