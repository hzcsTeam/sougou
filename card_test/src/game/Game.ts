class Game extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.createView();
    }
    private schoolScene:SchoolScene;
    private ring:egret.Bitmap;
    private teacher:TeacherOne;
    private createView():void{
        //学校-牌子-打铃
       this.schoolScene=new SchoolScene();
       this.addChild(this.schoolScene);
       this.ring=new egret.Bitmap(RES.getRes("ring_png"));
       this.addChild(this.ring);
       this.ring.alpha=0
       var board:Board=new Board();
       this.addChild(board);
       egret.setTimeout(function(){
            board.del(); 
       },this,2000);
       egret.setTimeout(function(){
            var ani=egret.Tween.get(this.ring).to({alpha:1},100).wait(1900).to({alpha:0},10).call(this.secScene,this)
            ShakeTool.getInstance().shakeObj(this.schoolScene,2,20,5);  
       },this,2500);
    }
    private secScene():void{
        //老师表情
       this.teacher=new TeacherOne();
       this.addChild(this.teacher);
       this.teacher.init();
    }
    public reScene():void{
       this.alpha=0
    }
}