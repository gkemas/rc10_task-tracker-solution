import { AiOutlineClose } from "react-icons/ai";
const ShowTasks = ({tasks,handleChange,isDone}) => {
  return( <>
   {tasks.map((item,i)=>{
     const{id,isDone}=tasks
     
    return(
      <div className="task task-h3" 
      onClick={()=>{handleChange(i)}}>
         <div>
        <p>{item.isDone}</p>
        <p className={changeClass}       
         key={id}>{item.task}</p>
        <p>{item.day}</p>        
         </div>
         <button className="btnClose"><AiOutlineClose/></button>
      </div>
    )
   })
  
   
  
   }
  </>
)};




export default ShowTasks;
