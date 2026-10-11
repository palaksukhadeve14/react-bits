import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("black");
  return (
    <>
      <div className='w-full h-screen duration-200' style={{ background: color }}>
        <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-12 text-2xl mb-4'>
          <div className='fixed flex flex-wrap justify-center  gap-3 rounded-2xl shadow-3xl bg-white px-3 py-2'>
            <button onClick={()=>setcolor("red")} className='outline-none px-4 py-1 rounded-2xl shadow-lg text-white ' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={()=>setcolor("green")} className='outline-none px-4 py-1 rounded-2xl shadow-lg text-white' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={()=>setcolor("blue")} className='outline-none px-4 py-1 rounded-2xl shadow-lg text-white' style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={()=>setcolor("lavender")} className='outline-none px-4 py-1 rounded-2xl shadow-lg text-white' style={{ backgroundColor: "lavender" }}>Lavender</button>
            <button onClick={()=>setcolor("pink")} className='outline-none px-4 py-1 rounded-2xl shadow-lg text-white' style={{ backgroundColor: "pink" }}>Pink</button>
            <button onClick={()=>setcolor("purple")} className='outline-none px-4 py-1 rounded-2xl shadow-lg text-white' style={{ backgroundColor: "purple" }}>Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
