import React from 'react'
// import { useContext } from 'react'
// import { TextContext } from './TextContext'

function ToDoItem({text, ...props}) {
  
  // const text = useContext(TextContext)
  return (
    <div className='flex flex-row justify-between items-center px-5 py-2 w-full hover:bg-gray-200 rounded-3xl'>
        <div className='flex flex-row gap-5 items-center'>
          <input type="checkbox" className='size-[18px]'/>
          <span className='text-2xl' {...props}>{text}</span>
        </div>
        <button>
          <img src="/trash-2.svg" alt="trash-icon" />
        </button>
    </div>
  )
}

export default ToDoItem