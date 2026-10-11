import { useState, useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //useRef hook
  const passwordRef=useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "{}@#$%^&*()!~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numAllowed, charAllowed, setpassword])

  useEffect(()=>{
    passwordgenerator()
  },[length,numAllowed,charAllowed,passwordgenerator])

  const copytoclipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-2xl px-4 py-3 my-8 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white' placeholder='password' readOnly
          ref={passwordRef} />
          <button onClick={copytoclipboard}
          className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex tesxt-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => setlength(e.target.value)} />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id="numberinput" onChange={() => { setnumAllowed((prev) => !prev) }} />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="charinput" onChange={()=>{
              setcharAllowed((prev)=>!prev) 
            }} />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
