import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { editTask, removeTask } from '../redux/reducer/todos'
import { useForm } from 'react-hook-form'

function ToDoList() {
  const {register, handleSubmit} = useForm()
  const data = useSelector(state => state.tasks.data)
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(null)

  function remove(value) {
    dispatch(removeTask(value))
  }

  function edit(index) {
    setEditing(index);
  }

  function submit(data, index) {
    console.log(data)
    console.log(index)
    // dispatch(editTask({data, index}))
    // setEditing(null)
  }

  return (
    <div className='overflow-y-scroll flex flex-col justify-start items-center gap-2 w-full h-[80%]'>
      {data?.map((item, index)=> (
          <div key={index} className='flex flex-row justify-between items-center px-5 py-2 w-full hover:bg-gray-200 rounded-3xl'>
            <div className='flex flex-row gap-5 items-center'>
              <input id={`task-${index}`} type="checkbox" className='size-[18px]'/>
              <span className={editing === index ? "hidden" : "text-2xl"}>{item.result}</span>
              <form id='edit' className={editing === index ? "flex-1" : "hidden"}
              onSubmit={handleSubmit((data) => submit(data, index))}>
                <input {...register('result')} defaultValue={item.result} type='text'/>
              </form>
            </div>
            <div className='flex flex-row justify-center'>
              <button onClick={()=>{edit(index)}} className='hover:bg-blue-300 p-2 rounded-sm outline-0'>
                <img src="/pencil.svg" alt="edit-icon" />
              </button>
              <button onClick={()=>{remove(index)}} className='hover:bg-red-300 p-2 rounded-sm outline-0'>
                <img src="/trash-2.svg" alt="trash-icon" />
              </button>
            </div>
          </div>
      ))}
    </div>
  )
}

export default ToDoList