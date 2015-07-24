namespace DailyTrack.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ActivityTimeId : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ActivityTimes",
                c => new
                    {
                        ActivityTimeId = c.Int(nullable: false, identity: true),
                        ActivityId = c.Int(nullable: false),
                        StartTime = c.DateTime(),
                        EndTime = c.DateTime(),
                        CreateDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.ActivityTimeId)
                .ForeignKey("dbo.Activities", t => t.ActivityId, cascadeDelete: true)
                .Index(t => t.ActivityId);
            
            DropColumn("dbo.Activities", "StartTime");
            DropColumn("dbo.Activities", "EndTime");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Activities", "EndTime", c => c.DateTime());
            AddColumn("dbo.Activities", "StartTime", c => c.DateTime());
            DropForeignKey("dbo.ActivityTimes", "ActivityId", "dbo.Activities");
            DropIndex("dbo.ActivityTimes", new[] { "ActivityId" });
            DropTable("dbo.ActivityTimes");
        }
    }
}
