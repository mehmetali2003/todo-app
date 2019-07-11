using DataAccessLayer.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace DataAccessLayer
{

    public class ToDoDbContext : DbContext
    {
        public ToDoDbContext(DbContextOptions<ToDoDbContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }
        public DbSet<ToDo> ToDos { get; set; }
    }

  
}
