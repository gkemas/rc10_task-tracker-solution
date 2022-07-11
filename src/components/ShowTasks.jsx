import { AiOutlineClose } from "react-icons/ai";
const ShowTasks = ({tasks,handleChange,deleteTask}) => {
  return( <>
   {tasks.map((item,i)=>{
     const{id}=item;
     console.log(item);
    return(
      <div className="task-h3" key={id}>
         <div onClick={()=>handleChange(item.id)} className={item.isDone ? "done":"task"}>
         {/* // style={{textDecoration:item.isDone && "line-through",cursor:"pointer"}} */}
        <p>{item.task}</p>
        <p>{item.day}</p>        
         </div>
         <button className="btnClose" onClick={()=>deleteTask(item.id)}><AiOutlineClose/></button>
      </div>
    )
   })
  
   
  
   }
  </>
)};




export default ShowTasks;
