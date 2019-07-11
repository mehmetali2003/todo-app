using DataAccessLayer;
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoApis.Models;

namespace ToDoApis.Services
{
    public class ToDoService : IToDoService
    {
        private readonly IDataRepository<ToDo> _dataRepository;

        public ToDoService(IDataRepository<ToDo> dataRepository)
        {
            _dataRepository = dataRepository;
        }
        public ToDoService()
        {

        }

        void IToDoService.AddToDo(ToDoModel model)
        {
            _dataRepository.Add(model.ToEntity());
        }

        void IToDoService.UpdateToDo(ToDoModel model)
        {
            var existingToDo = _dataRepository.Get(model.Id);
            _dataRepository.Update(existingToDo,model.ToEntity());
        }

        List<ToDoModel> IToDoService.GetTodos(long userId)
        {
            return _dataRepository.GetAll()
                                   .Where(x=>x.UserId==userId)
                                  .Select(x=>x.ToViewModel()).ToList();
        }

        void IToDoService.DeleteToDo(long id)
        {
            var toDelete = _dataRepository.Get(id);
            _dataRepository.Delete(toDelete);
        }
    }
}
