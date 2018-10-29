namespace agenda_angularjs.Migrations
{
    using System.Data.Entity.Migrations;
    using agenda_angularjs.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<agenda_angularjs.Models.ScheduleDB>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(agenda_angularjs.Models.ScheduleDB context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
            context.Schedules.AddOrUpdate(
                  p => p.title,
                  new Schedule { title = "titulo 1" }
                );
        }
    }
}
