class ChoiceGame extends egret.DisplayObjectContainer{
    private bg:egret.Bitmap;
    private content:egret.Bitmap;
    private shop:ShopScene;
    private cardGame:CardGame;
    private xuanGame:XuanGame;
    private lastPage:LastPage;
    public constructor(){
        super();
        this.bg=new egret.Bitmap(RES.getRes("loading_bg_jpg"));
        this.addChild(this.bg);
        this.content=new egret.Bitmap(RES.getRes("content_png"));
        this.addChild(this.content);
        // this.content.anchorOffsetX=320;
        this.content.anchorOffsetY=300;
        this.content.y=300;
        this.content.scaleY=0.1;
        egret.Tween.get(this.content).to({scaleY:1},400,egret.Ease.quadOut).call(this.init,this);
        
    }
    public init(){
        this.shop=new ShopScene();
        this.addChild(this.shop);
        // this.shop.init();
    }
    public del_shop():void{
        this.removeChild(this.shop);
        this.cardGame=new CardGame();
        this.addChild(this.cardGame);
    }
    public del_cardGame():void{
        this.removeChild(this.cardGame);
        this.xuanGame=new XuanGame();
        this.addChild(this.xuanGame)
    }
    public reset_xuan():void{
        this.removeChild(this.xuanGame);
        this.xuanGame=new XuanGame();
        this.addChild(this.xuanGame)
    }
    public del_xuan():void{
        this.removeChild(this.xuanGame);
        this.lastPage=new LastPage();
        this.addChild(this.lastPage);
    }
    public restart():void{
        (<Game>this.parent).restart();
    }
}