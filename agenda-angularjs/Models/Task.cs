using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace agenda_angularjs.Models
{
    public class Task
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public bool Completed { get; set; }
        public DateTime Deadline { get; set; }
        public int ScheduleID { get; set; }

        public virtual Schedule Schedule { get; set; }
    }
}