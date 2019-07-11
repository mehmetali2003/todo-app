
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoApis.Models
{
    public static class Extensions
    {
        public static ToDoModel ToViewModel(this ToDo model)
        {
            return new ToDoModel
            {
                Id=model.Id,
                Description=model.Description,
                Title=model.Title,
                UserId=model.UserId,
                Status=model.Status
            };
        }


       public static ToDo ToEntity(this ToDoModel model)
        {
            return new ToDo
            {
                Id=model.Id,
                Description=model.Description,
                Title=model.Title,
                UserId=model.UserId,
                Status=model.Status
            };
        }



    }
}
