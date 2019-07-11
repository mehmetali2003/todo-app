using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class ToDoDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<ToDo> ToDos { get; set; }

        public ToDoDbContext() : base(@"Data Source=.\SQLEXPRESS01;Initial Catalog=ToDoDB;Integrated Security=SSPI;")
        {

        }
    }
}
