using System.Data.Entity;

namespace agenda_angularjs.Models
{
    public class ScheduleDB : DbContext
    {
        public ScheduleDB() : base("ScheduleDB") { }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<Task> Tasks { get; set; }
    }
}