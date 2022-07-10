import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
// import data from '../helper/starterData'

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  // const { isDone,id } = tasks;
  const handleChange = (isDoneid) => {
    // tasks[id]["isDone"] = !tasks[id]["isDone"];

    setTasks(tasks.map((task)=>task.id === isDoneid ? {...task,isDone:!task.isDone}:task))
    // localStorage.setItem("tasks", JSON.stringify(tasks));

  };
  const deleteTask = (deleteid) =>{
   setTasks(tasks.filter((task)=>task.id !== deleteid));
  //  localStorage.setItem("tasks", JSON.stringify(tasks));

  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);
  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTasks tasks={tasks} handleChange={handleChange} deleteTask={deleteTask}/>
    </div>
  );
};

export default Home;
