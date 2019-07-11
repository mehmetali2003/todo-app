using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public static class ToDoRepository
    {
        private static ToDoDbContext dbContext = null;
        public static ToDoDbContext DbContext
        {
            get
            {
                if (dbContext == null)
                {
                    dbContext = new ToDoDbContext();
                }

                return dbContext;
            }
        }

        public static List<ToDo> GetToDos()
        {
            return DbContext.ToDos.ToList();
        }

        public static List<ToDo> GetToDoByUserId(long userId)
        {
            return DbContext.ToDos.Where(td => td.UserId.Equals(userId)).ToList();
        }

        public static User GetUser(string userName, string password)
        {
            User user = new User();
            user = DbContext.Users.Where(u => u.UserName.Equals(userName) && u.Password.Equals(password)).FirstOrDefault();

            return user;
        }
    }
}
