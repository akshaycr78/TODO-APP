import { useState } from "react"
import './todo.css'

function Todo(){

    const [data,setdata]=useState("")
    const [todo,setTodo]=useState([])
    const [edit,setEdit]=useState(-1)
    const [editInput,SetInput]=useState("")

    function HandleAdd(){
        if(data!==""){
            if(edit===-1){
        setTodo([...todo,data])
        }
        else{
            const editTodo=[...todo]
            editTodo[edit]=data
            setTodo(editTodo)
            setEdit(-1)
        }
    }
        setdata("")
    }
    function HandleDelete(index){
        const deleteTodo=[...todo]
        deleteTodo.splice(index,1)
        setTodo(deleteTodo)
    }
    function HandleEdit(index){
        setEdit(index)
        SetInput(todo[index])

    }
    function Cancel(){
      setEdit(-1)
    }
    return (
        <div class="main">
          <div class="heading"><p><b>TODO</b></p></div>
          <center>
            <div className="main1">
            
            <div class="input" >
              
              <input id="inp"
                type="text"
                value={data}
                onChange={(e) => setdata(e.target.value)}
                placeholder="Enter the Text"
              />
            
              <button id="add" onClick={HandleAdd}>
                +
              </button>
            </div>
          </div>

            <div className="main2">
              <div class="map">
              <div className="box-container">
              {todo.map((item, index) => (
                <div className="box" key={index}>
                {edit === index ? (
                  <div className="upd">
                    <input
                    type="text"
                    value={editInput}
                    onChange={(e) => SetInput(e.target.value)}
                    />
                        <button 
                        id="save"
                          onClick={() => {
                            const updatedTodo = [...todo];
                            updatedTodo[index] = editInput; 
                            setTodo(updatedTodo);
                            setEdit(-1); 
                            SetInput(""); 
                          }}
                        >
                          SAVE
                        </button>
                        <button id="cancel" onClick={Cancel}>CANCEL</button>
                      </div>
                    ) : (
                      <div class="last">
                        {item}
                        <button id="delete" onClick={() => HandleDelete(index)}>DELETE</button>
                        <button id="edit" onClick={() => HandleEdit(index)}>EDIT</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            </div>
          </center>
        </div>
      );
    }
    
    export default Todo;