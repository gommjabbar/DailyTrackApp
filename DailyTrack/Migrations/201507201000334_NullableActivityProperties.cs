namespace DailyTrack.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class NullableActivityProperties : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Activities", "StartTime", c => c.DateTime());
            AlterColumn("dbo.Activities", "EndTime", c => c.DateTime());
            AlterColumn("dbo.Activities", "UpdateDate", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Activities", "UpdateDate", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Activities", "EndTime", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Activities", "StartTime", c => c.DateTime(nullable: false));
        }
    }
}
