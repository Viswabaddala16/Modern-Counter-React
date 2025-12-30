import { useState } from 'react'
import './App.css'
import MyButton from './MyButton';
function App() {
  const [count, setCount] = useState(0)


  function handleIncrease(){
    setCount(prev => prev + 1);
  }
  function handleDecrease(){
    if(count > 0) {
      setCount(prev => prev - 1);
    }
  }
  function handleReset(){
    setCount(0)
  }

  return (
    <>
   
      <div className="border-[1px] border-[solid] border-[orange] px-24 py-8 max-w-[550px] [box-shadow:4px_4px_8px_rgba(0,0,0,0.3)] flex flex-col items-center gap-2 bg-[#f0f9ff] rounded-[10px]">
        <h1 className='m-0 leading-normal text-3xl font-bold text-slate-800'>Counter App</h1>
        <div className='display-screen'>
          <h2 className='m-0 text-2xl  leading-normal'>Count : {count}</h2>
        </div>
        <div className='flex gap-4 rounded-[10px] w-full'>
          <MyButton onClick={handleIncrease} label="Increase +" className="rounded-[4px] border-[1px] border-[solid] border-[black] px-2 py-1 [transition:transform_0.1s_ease] cursor-pointer active:scale-[0.95]"/>
          <MyButton onClick={handleDecrease} label="Decrease -" className="rounded-[4px] border-[1px] border-[solid] border-[black] px-2 py-1  [transition:transform_0.1s_ease] cursor-pointer active:scale-[0.95]"/>
        </div>
        <MyButton onClick={handleReset} label="Reset" className="rounded-[4px] border-[1px] border-[solid] border-[black] px-2 py-1 w-full [transition:transform_0.1s_ease] cursor-pointer active:scale-[0.95]"/>
      </div>
    </>
  )
}

export default App
