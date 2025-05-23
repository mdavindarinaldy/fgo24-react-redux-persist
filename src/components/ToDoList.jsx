import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTask, removeTask } from '../redux/reducer/todos';
import { useForm } from 'react-hook-form';

function ToDoList() {
  const data = useSelector((state) => state.tasks.data);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [editingIndex, setEditingIndex] = useState(null);

  function remove(index) {
    dispatch(removeTask(index));
  }

  function edit(index) {
    setEditingIndex(index);
    reset({ edit: data[index]?.result || '' });
  }

  function submit(formData) {
    if (editingIndex !== null) {
      dispatch(editTask({ text: formData.edit, index: editingIndex }));
      setEditingIndex(null);
      reset();
    }
  }

  function cancelEdit() {
    setEditingIndex(null);
    reset();
  }

  return (
    <>
      <div className="overflow-y-scroll flex flex-col justify-start items-center gap-2 w-full h-[80%]">
        {data?.map((item, index) => (
          <div key={index} className="flex flex-row justify-between items-center px-5 py-2 w-full hover:bg-gray-200 rounded-3xl">
            <div className="flex flex-row gap-5 items-center">
              <input id={`task-${index}`} type="checkbox" className="size-[18px]" />
              <span className="text-2xl">{typeof item.result === 'string' ? item.result : 'Task Invalid'}</span>
            </div>
            <div className="flex flex-row justify-center">
              <button onClick={() => edit(index)} className="hover:bg-blue-300 p-2 rounded-sm outline-0">
                <img src="/pencil.svg" alt="edit-icon" />
              </button>
              <button onClick={() => remove(index)} className="hover:bg-red-300 p-2 rounded-sm outline-0">
                <img src="/trash-2.svg" alt="trash-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {editingIndex !== null && (
        <div className="size-full bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center absolute rounded-2xl">
          <form id="edit" className="bg-white rounded-2xl px-5 py-5 w-[30svw] h-[20svw] flex flex-col justify-center items-center gap-8" onSubmit={handleSubmit(submit)}>
            <label htmlFor="editTask" className="font-bold text-2xl">
              Edit Task
            </label>
            <input {...register('edit', { required: true })} id="editTask" type="text" className="w-[24svw] bg-gray-100 rounded-2xl py-3 px-5" autoFocus placeholder="Edit Here"/>
            <div className="flex flex-row gap-4">
              <button type="submit" className="px-5 py-3 w-[12svw] bg-gray-400 rounded-2xl text-white font-semibold hover:bg-gray-500">Submit Task</button>
              <button type="button" onClick={cancelEdit} className="px-5 py-3 w-[12svw] bg-red-400 rounded-2xl text-white font-semibold hover:bg-red-500">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default ToDoList;