using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace agenda_angularjs.Models
{
    public class ScheduleDB : DbContext
    {
        //public ScheduleDB() : base("AgendaDB")
        //{
        //}
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<Task> Tasks { get; set; }
    }
}