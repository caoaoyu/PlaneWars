var BackGround = (function (_super) {
    function BackGround() {
        BackGround.super(this);
        this.bg1 = new Laya.Sprite();
        this.bg1.loadImage('comp/background.png');
         this.addChild(this.bg1)

        this.bg2 = new Laya.Sprite();
        this.bg2.loadImage('comp/background.png');
        this.bg2.pos(0, -852)
        this.addChild(this.bg2)

        Laya.timer.frameLoop(1, this, this.onAnimate);
    
    };
    Laya.class(BackGround, 'BackGround', _super)

    var _proto = BackGround.prototype;

    _proto.onAnimate = function () {
        this.y += 1;
        if( this.bg1.y + this.y >= 852) {
            this.bg1.y -= 852 * 2
        }
        if( this.bg2.y + this.y >= 852) {
            this.bg2.y -= 852 * 2
        }
    }

    return BackGround;
})(Laya.Sprite);