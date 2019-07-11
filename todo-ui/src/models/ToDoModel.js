
  const TaskState = Object.freeze({
    TODO : "ToDo",
    DONE: "Done"
});     

  var ToDoModel={
      id:0,
      title:"",
      description:"",
      userId:"",
      status:TaskState.TODO
      }

 

 export { ToDoModel,TaskState};      
