import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({tasks,setTasks}) => {
const [toggle, setToggle] = useState(false)
// const [btnStyle, setbtnStyle] = useState({
//   name:"Show Task Bar" ,
//   bgColor:'purple'
// })

const handleShow = () =>{
  // if(toggle){
  //   setbtnStyle({
  //     name:"Show  AddTask Bar" ,
  //   bgColor:"purple"}
  //   )
  // }else {
  //   setbtnStyle({
  //     name:" Hide Add Task Bar" ,
  //     bgColor:"red"}
  //   )
  // }
 setToggle(!toggle)


}



  return(<header className="header">
    <h1>Task Tracker</h1>
    <button className="btn"
    onClick={handleShow}
    style={{backgroundColor:toggle ? "red" :"purple"}}  >
    {/* // style={{backgroundColor:btnStyle.bgColor}}
    // {btnStyle.name} */}
    {toggle ? "Show Add Task Bar" :" Hide Add Task Bar"}
     </button> 
     {toggle && <AddTaskForm tasks={tasks} setTasks={setTasks}/>}
     
  </header>
)};

export default Header;
