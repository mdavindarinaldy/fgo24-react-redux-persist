import React, { useContext, useState } from 'react'
import { TextContext } from './TextContext'
import ToDoItem from './ToDoItem'


function ToDoList() {
  const text = useContext(TextContext)
  const [listItem, setListItem] = useState([])
  const isDoubled = listItem.find((element)=> element === text)
  if (text !== '' && (!isDoubled)) { setListItem([...listItem, text]) }

  console.log(listItem)

  return (
    <div className='overflow-y-scroll flex flex-col justify-start items-center gap-2 w-full h-[80%]'>
        {listItem.map((item, index) => (
          <ToDoItem key={index} text={`${item}`}/>
        ))}
    </div>
  )
}

export default ToDoList