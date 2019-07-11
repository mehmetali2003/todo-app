
import API from '../api';

export  function ToDoService() {
    

    this.getToDos=function(userId){
        return API.get('ToDo/GetAllToDos',{
            params: {
                userId: userId
            }
          });      
    } 

    this.AddToDo=function(todoModel) {
        return API.post('ToDo', todoModel);
     };
 
     this.updateToDo=function(todoModel){
         return API.put('ToDo', todoModel);
      };    

    this.deleteToDo=function(toDoId){
        return API.delete('ToDo',{
            params: {
                id: toDoId
            }
          });      
    };   
    
}