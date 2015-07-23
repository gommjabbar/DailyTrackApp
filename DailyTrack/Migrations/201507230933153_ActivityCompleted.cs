namespace DailyTrack.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ActivityCompleted : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Activities", "Completed", c => c.Boolean(nullable: false));
            AddColumn("dbo.Activities", "CompletedAt", c => c.DateTime());
            DropColumn("dbo.Activities", "Status");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Activities", "Status", c => c.Boolean(nullable: false));
            DropColumn("dbo.Activities", "CompletedAt");
            DropColumn("dbo.Activities", "Completed");
        }
    }
}
