import React from 'react'
import { useForm } from 'react-hook-form'
import ToDoItem from './ToDoItem'

function Input({onSubmit}) {
  const {register, handleSubmit} = useForm()

  function submitData(value) {
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit(submitData)} className='flex flex-row px-5 py-2 justify-start items-center border-1 border-gray-400 rounded-3xl w-[50svw]'>
        <input {...register('result')} type="text" placeholder='What Do You Want To Do?' className='outline-0 flex-1'/>
    </form>
  )
}

export default Input