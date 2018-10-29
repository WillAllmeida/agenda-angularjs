namespace agenda_angularjs.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class fixtitlepropertyonscheduletable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Schedules", "title", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Schedules", "title");
        }
    }
}
