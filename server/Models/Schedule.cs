using System.Collections.Generic;

namespace agenda_angularjs.Models
{
    public class Schedule
    {
        public int ID { get; set; }
        public string title { get; set; }

        public IEnumerable<Task> Tasks;
    }
}