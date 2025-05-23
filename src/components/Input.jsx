import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/reducer/todos'

function Input() {
  const {register, handleSubmit, reset} = useForm()
  const dispatch = useDispatch()

  function submitData(value) {
    dispatch(addTask(value))
    reset()
  }

  return (
    <form id='form' onSubmit={handleSubmit(submitData)} className='flex flex-row px-5 py-2 justify-start items-center border-1 border-gray-400 rounded-3xl w-[50svw]'>
        <input {...register('result')} type="text" placeholder='What Do You Want To Do?' className='outline-0 flex-1'/>
    </form>
  )
}

export default Input