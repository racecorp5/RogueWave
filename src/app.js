var TitleLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        //build the menu
        var closeItem = new cc.MenuItemImage(res.CloseNormal_png, res.CloseSelected_png,
            function () {
                cc.log("Close is clicked!");
                //
            }, this);

        var aboutItem = new cc.MenuItemImage(res.CloseNormal_png, res.CloseSelected_png,
            function () {
                cc.log("About is clicked!");
                //
            }, this);

        var gameItem = new cc.MenuItemImage(res.CloseNormal_png, res.CloseSelected_png,
            function () {
                cc.log("Game is clicked!");
                var scene = new cc.Scene();
                scene.addChild(new GamePlayLayer());
                cc.director.runScene(new cc.TransitionFade(1.2, scene));
            }, this);

        var waveListItem = new cc.MenuItemImage(res.CloseNormal_png, res.CloseSelected_png,
            function () {
                cc.log("Enemies is clicked!");
                var scene = cc.director.getRunningScene();
                scene.addChild(new WaveListLayer());
            }, this);

        var menu = new cc.Menu(closeItem, aboutItem, gameItem, waveListItem);
        menu.alignItemsHorizontally();
        menu.x = 300;
        menu.y = 50;
        this.addChild(menu, 1);


        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Title Screen", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = 0;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.5,
            rotation: 180
        });
        this.addChild(this.sprite, 0);

        this.sprite.runAction(
            cc.sequence(
                cc.rotateTo(2, 0),
                cc.scaleTo(2, 1, 1)
            )
        );
        helloLabel.runAction(
            cc.spawn(
                cc.moveBy(2.5, cc.p(0, size.height - 40)),
                cc.tintTo(2.5,255,125,0)
            )
        );
        return true;
    }
});
var LevelSelectLayer = cc.Layer.extend({});
var UpgradeLayer = cc.Layer.extend({});
var PurchaseLayer = cc.Layer.extend({});
var WaveListLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        for(i in BadWaves) {
            var helloLabel = new cc.LabelTTF(BadWaves[i].name, "Arial", 38);
            // position the label on the center of the screen
            helloLabel.x = size.width / 2;
            helloLabel.y = 50 + (i * 20);
            // add the label as a child to this layer
            this.addChild(helloLabel, 5);
            cc.log(i);
        }
        return true;
    }
});
var AchievementsLayer = cc.Layer.extend({});
var SettingsLayer = cc.Layer.extend({});
var AboutLayer = cc.Layer.extend({});

var GamePlayLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var helloLabel = new cc.LabelTTF("Game Play Screen", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = 50;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);
        return true;
    }
});
var GameOverLayer = cc.Layer.extend({});

var TitleScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new TitleLayer();
        this.addChild(layer);
    }
});
var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GamePlayLayer();
        this.addChild(layer);
    }
});

/*
Title Scene
  Title Layer
  LevelSelect Layer
  Upgrade Layer
  Purchase Layer
  WaveList Layer
  Achievements Layer
  Settings Layer
  About Layer

Game Scene
  GamePlay Layer
  GameOver Layer
  LevelSelect Layer
  Upgrade Layer
  Purchase Layer
  Setting Layer

Game
Purchase
Settings/About
Title
Splash
Upgrade
World/Level
Enemy Wave List
Achievements
http://www.supersuraccoon-cocos2d.com/2012/11/14/introduction-to-some-great-ios-gesture-recognition-libraries-cocos2d/
*/
