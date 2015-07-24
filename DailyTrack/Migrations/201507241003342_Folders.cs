namespace DailyTrack.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Folders : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Folders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        CreateDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Activities", "FolderId", c => c.Int(nullable: false));
            CreateIndex("dbo.Activities", "FolderId");
            AddForeignKey("dbo.Activities", "FolderId", "dbo.Folders", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Activities", "FolderId", "dbo.Folders");
            DropIndex("dbo.Activities", new[] { "FolderId" });
            DropColumn("dbo.Activities", "FolderId");
            DropTable("dbo.Folders");
        }
    }
}
