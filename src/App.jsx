import React, { useState } from 'react'
import Input from './components/Input'
// import ToDoItem from './components/ToDoItem'
import { TextContext } from './components/TextContext.js'
import ToDoList from './components/ToDoList.jsx'

function App() {
  const [val, setVal] = useState({result:''})

  return (
    <div className='m-10 py-10 flex flex-col justify-start items-center w-[60svw] h-[90svh] bg-white rounded-3xl'>
        <TextContext value={`${val.result}`}>
          <div className='flex flex-col justify-start items-center gap-5 h-full'>            
            <span className='text-center text-4xl font-bold'>To Do List</span>
            <Input onSubmit={setVal}/>
            <ToDoList/>
          </div>
        </TextContext>
    </div>
  )
}

export default App