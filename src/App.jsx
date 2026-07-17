import './App.css'
import InputItem from './components/InputItem'
import FoodMenu from './components/FoodMenu'
import MenuHeading from './components/MenuHeading'
import ErrorMsg from './components/ErrorMsg'
import { useState } from 'react'

function App() {
  const [fooditem, setfooditem] = useState(['Salad', 'Green Vegatable']);
  const handleChange = (e) => {
    if (e.key == "Enter") {
      if (e.target.value !== "") {
        let addItem = e.target.value;
        let newArr = [...fooditem, addItem];
        setfooditem(newArr);
        e.target.value = "";
      }
    }
  }
  const deleteItem = (e) => {
    e.target.closest("div").remove();
  }
  return (
    <>
      <div className="card">
        <MenuHeading></MenuHeading>
        <ErrorMsg fooditem={fooditem} />
        <InputItem handleChange={handleChange} />
        <FoodMenu fooditem={fooditem} deleteItem={deleteItem} />
      </div>
    </>
  )
}

export default App
