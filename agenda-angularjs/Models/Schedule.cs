using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace agenda_angularjs.Models
{
    public class Schedule
    {
        public int ID { get; set; }
        public string title { get; set; }

        public IEnumerable<Task> Tasks;
    }
}