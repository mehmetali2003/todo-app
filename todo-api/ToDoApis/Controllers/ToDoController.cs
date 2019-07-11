using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoApis.Models;
using ToDoApis.Services;

namespace ToDoApis.Controllers
{
    [EnableCors("AllowMyOrigin")]
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly IToDoService _toDoService;
        public ToDoController(IToDoService toDoService)
        {
            _toDoService = toDoService;
        }
        // GET: api/ToDo
        [HttpGet]
        [Route("GetAllToDos")]
        //[HttpGet("{userId}", Name = "GetAllToDos")]
        public List<ToDoModel> GetAllToDos(long userId)
        {
            return _toDoService.GetTodos(userId);
        }

        // GET: api/ToDo/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ToDo
        [HttpPost]
        public void Post([FromBody] ToDoModel model)
        {
            _toDoService.AddToDo(model);
        }

        // PUT: api/ToDo/5
        [HttpPut]
        public void Put([FromBody] ToDoModel model)
        {
            _toDoService.UpdateToDo(model);
        }

   
   
        [HttpDelete]
        public void Delete(int id)
        {
            _toDoService.DeleteToDo(id);
        }
    }
}
