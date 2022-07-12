import React, { useState } from "react";

const App =()=>{
  const [inputList, setInputList]= useState("");
  const [items, setItems]= useState([]);

  let itemEvent = (event)=>{
       setInputList(event.target.value);
  }

  let listOfItem= ()=>{
      setItems((oldItem)=>{
        return [...oldItem, inputList];
      });
      setInputList("");
  }

  let deleteItem = (id)=>{
    console.log("delleeteed");
    setItems((oldItems)=>{
      return oldItems.filter((arrayEle, index)=>{
        return index!==id;
      })
    })
  }

  return <>
  <div className="main_div">
    <div className="center_div">
      <br></br>
      <h1>To Do List</h1>
      <br></br>
      <input type="text" placeholder="Add a Item"
       value={inputList} onChange={itemEvent}/>

      <button onClick={listOfItem}> + </button>

      <ol>
        {/* <li> {inputList}</li> */}
        {items.map((val, index)=>{
          return( <>
             
             <li key={index} id={index} >
             <button onClick={()=>{
              deleteItem(index)
             }}> - </button>
              {"  "+val}</li>
          </>
          
          )
        })}
      </ol>

    </div>

  </div>
  
  </>
}

export default App;
