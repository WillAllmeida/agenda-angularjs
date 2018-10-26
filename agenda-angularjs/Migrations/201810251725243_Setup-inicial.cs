namespace agenda_angularjs.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Setupinicial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Schedules",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Tasks",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Description = c.String(),
                        Completed = c.Boolean(nullable: false),
                        Deadline = c.DateTime(nullable: false),
                        ScheduleID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Schedules", t => t.ScheduleID, cascadeDelete: true)
                .Index(t => t.ScheduleID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Tasks", "ScheduleID", "dbo.Schedules");
            DropIndex("dbo.Tasks", new[] { "ScheduleID" });
            DropTable("dbo.Tasks");
            DropTable("dbo.Schedules");
        }
    }
}
