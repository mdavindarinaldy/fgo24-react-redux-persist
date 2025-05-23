import React from 'react'
import Input from './components/Input'
import ToDoList from './components/ToDoList.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'


function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className='m-10 py-10 flex flex-col justify-start items-center w-[60svw] h-[90svh] bg-white rounded-3xl'>
            <div className='flex flex-col justify-start items-center gap-5 h-full relative'>
                <span className='text-center text-4xl font-bold'>To Do List</span>
              <Input/>
              <ToDoList/>
            </div>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App