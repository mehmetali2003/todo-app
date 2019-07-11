using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using ToDoApplication.Models;

namespace ToDoApplication.Controllers
{
    public class TodoController : ApiController
    {

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("todos")]
        public ActionResult GetToDoList(UserModel userModel)
        {
            User user = ToDoRepository.GetUser(userModel.UserName, userModel.Password);
            if (user.Id > 0)
            {
                if (user.IsSuper)
                {
                    ToDoRepository.GetToDos();
                }
                else
                {
                    ToDoRepository.GetToDoByUserId(user.Id);
                }
            }

            return View();
        }
    }
}