using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoApis.Models;

namespace ToDoApis.Services
{
    public interface IToDoService
    {
        List<ToDoModel> GetTodos(long userId);
        void AddToDo(ToDoModel model);
        void UpdateToDo(ToDoModel model);
        void DeleteToDo(long id);

    }
}
