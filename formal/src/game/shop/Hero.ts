class Hero extends egret.Sprite{
    private teacher:egret.Bitmap;
    private hand:BitmapMovie;
    private dialog:egret.Bitmap;
    public tip:egret.TextField;
    private clickeffect1:ClickEffect;
    public constructor(){
        super();
        this.teacher=new egret.Bitmap(RES.getRes("sg_hero_png"));
        this.addChild(this.teacher);
        this.teacher.anchorOffsetX=this.teacher.width/2;
        this.teacher.anchorOffsetY=this.teacher.height/2;
        this.teacher.scaleX=0.1;
        this.teacher.scaleY=0.1;
        this.teacher.x=500;
        this.teacher.y=Util.h-150; 
        this.teacher.alpha=0;   
    }
    public init(){
        var ta=egret.Tween.get(this.teacher).to({alpha:1,scaleX:1,scaleY:1},400,egret.Ease.backInOut).call(this.show,this)
    }
    private show(){
            this.dialog=new egret.Bitmap(RES.getRes("dialog1_hero_png"));
            this.addChild(this.dialog);
            this.dialog.x=5;
            this.dialog.y=Util.h-330;
            this.tip=new egret.TextField();       
            this.tip.x=55;
            this.tip.y=Util.h-250;
            this.tip.size=25;
            this.tip.textColor=0x000000
            this.tip.fontFamily="fzdhjt";
            this.tip.width=300;
            
            // this.tip.anchorOffsetX=this.tip.width/2;
            // this.tip.anchorOffsetY=this.tip.height/2;
            this.tip.textAlign=egret.HorizontalAlign.LEFT;
            // this.tip.verticalAlign=egret.VerticalAlign.MIDDLE;
            this.tip.textFlow = <Array<egret.ITextElement>>[
                // {text:"店铺开业仅仅迈出了成功的第一步，招徕买家是有策略的，接下来你面临两关比拼，只有打败竞争对手才能成为终极赢家！\n",style:{"size":20}},
                // {text:"        第一关规则Tips：\n",style:{"size":20}},
                // {text:"将同类词两两配对（如",style:{"size":20}},
                // {text:"苹果",style:{"size":20,"textColor":0xdb6638}},
                // {text:"-",style:{"size":20}},
                // {text:"香蕉",style:{"size":20,"textColor":0xdb6638}},
                // {text:"），配对成功即可形成推广词组，招徕顾客。用时越短，获胜几率越高！",style:{"size":20}},
                {text:"    招徕顾客是有策略的哦~\n",style:{"size":25}},
                {text:"接下来两关比拼，只有打败竞争对",style:{"size":25}},
                {text:"手才能成为终极赢家\n",style:{"size":25}},
             ];   
            this.addChild(this.tip);  
            
            // TyperText.getInstance().typerEffect(this.tip,"规则Tips：将同类词两两配对（如苹果—香蕉），配对成功即可形成推广词组，招徕顾客。配对的时间越少奖励越多！",10);
            
      
    }
    public bai(){
        this.removeChild(this.tip);
        this.removeChild(this.dialog);
        var ta=egret.Tween.get(this.teacher).to({x:-400},400,egret.Ease.sineInOut).call(()=>{
            (<Shop>this.parent).del();
        });
    }
}