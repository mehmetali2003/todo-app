using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccessLayer
{
    public class ToDoManager : IDataRepository<ToDo>
    {
        readonly ToDoDbContext _toDoContext;

        public ToDoManager(ToDoDbContext context)
        {
            _toDoContext = context;
        }

        public void Add(ToDo entity)
        {
            _toDoContext.ToDos.Add(entity);
            _toDoContext.SaveChanges();
        }

        public void Delete(ToDo entity)
        {
            _toDoContext.ToDos.Remove(entity);
            _toDoContext.SaveChanges();
        }

        public ToDo Get(long id)
        {
            return _toDoContext.ToDos
                  .FirstOrDefault(e => e.Id == id);
        }

        public IEnumerable<ToDo> GetAll()
        {
            return _toDoContext.ToDos.ToList();
        }

        public void Update(ToDo dbEntity, ToDo entity)
        {
            dbEntity.Id = entity.Id;
            dbEntity.Title = entity.Title;
            dbEntity.Description = entity.Description;
            dbEntity.UserId = entity.UserId;
            dbEntity.Status = entity.Status;

            _toDoContext.SaveChanges();
        }
    }
}
