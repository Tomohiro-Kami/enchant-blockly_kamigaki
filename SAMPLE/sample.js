enchant();

window.onload = function() {
    
    //表示される画面の大きさを、縦320, 横320とする
    var game = new Game(320, 320);
    //背景として用いる画像を読み込む
    game.preload('avatarBg1.png', 'avatarBg2.png', 'avatarBg3.png', 'chara1.gif', 'map0.png', 'icon0.gif', 'clear.png');
    //表示される画面の色を黒色にする
    game.rootScene.backgroundColor="Black";
    //fpsを10にすることで、1秒間におけるframe数を10にすることができる
    game.fps = 10;
    //gameの時間をカウントするためのもの
    game.time = 0;
    
    var map1;
    var map2 = Array();
    var map3;
    var map4;
    var bear;
    var star = Array();
    var text;
    var time;
    
    //bearと衝突して消えたstarの数をカウント(最大で15)
    score=0;
    
    //↓の中に様々な命令文を書き入れることで、表示されている画面内に様々なものを表示できるようになる
    game.onload = function() {
        
        //avatarBg2.pngを画面上に表示させる
        
        //map1の大きさを縦50ピクセル, 横320ピクセルとする
        map1 = new Sprite(320,50);
        //map1.imageがavatarBg2.pngを指す
        //そして、avatarBg2.pngの左上の端から縦50ピクセル, 横320ピクセルの大きさで画像を抜き出す
        map1.image = game.assets['avatarBg2.png'];
        //map1.frame=1にすることで、avatarBg2.pngの上から2番目の山を選択することができる。数字が0なら上から1番目、2なら上から3番目のものを選択する
        map1.frame = 1;
        //map1の大きさを縦2倍、横1倍とする
        map1.scale(1, 2);
        //画面のx=0, y=20の場所にmap1を表示できるようになる
        map1.x=0;
        map1.y=20;
        //map1を画面上に表示する
        game.rootScene.addChild(map1);
        
        
        //avatarBg1.pngを画面上に表示させる
        
        x=0;
        y=141;
        //for(){～}の処理を10回繰り返す
        for(i=0 ; i<10 ; i++){
            //map2[i]の大きさを縦128ピクセル, 横32ピクセルとする
            map2[i] = new Sprite(32,128);
            //map2[i].imageがavatarBg1.pngを指す
            //そして、avatarBg1.pngの左上の端から縦128ピクセル, 横32ピクセルの大きさで画像を抜き出す
            map2[i].image = game.assets['avatarBg1.png'];
            //map2[i].frame=1にすることで、avatarBg1.pngの左から2番目の草原を選択することができる。数字が0なら左から1番目、2なら左から3番目のものを選択する
            map2[i].frame = 1;
            //map2[i]の大きさを縦1.8倍、横1倍とする
            map2[i].scale(1, 1.8);
            //画面のx=map2[i].x, y=map2[i].yの場所にmap2[i]を表示できるようになる
            //map2[i].xの値は、0,32,64…と32ずつ増えていく
            //map2[i].yの値は、141で一定である
            map2[i].x = x + (i*32);
            map2[i].y = y;
            //map2[i]を画面上に表示する
            game.rootScene.addChild(map2[i]);
        }
        
        
        //avatarBg3.pngを画面上に表示させる
        
        //map3の大きさを縦43ピクセル, 横320ピクセルとする
        map3 = new Sprite(320,43);
        //map3.imageがavatarBg3.pngを指す
        map3.image = game.assets['avatarBg3.png'];
        //map3.frame=1にすることで、avatarBg3.pngの上から2番目の林を選択することができる。数字が0なら上から1番目、2なら上から3番目のものを選択する
        map3.frame = 1;
        //map3の大きさを縦1.5倍、横1倍とする
        map3.scale(1, 1.5);
        //画面のx=0, y=85の場所にmap3を表示できるようになる
        map3.x = 0;
        map3.y = 85;
        //map3を画面上に表示する
        game.rootScene.addChild(map3);
        
        
        //map0.pngを画面上に表示させる
        
        //map4の大きさを縦16ピクセル, 横16ピクセルとする
        map4 = new Sprite(16,16);
        //map4.imageがmap0.pngを指す
        map4.image = game.assets['map0.png'];
        //map4.frame=25にすることで、map0.pngの中から宝箱を選択することができる。
        map4.frame = 25;
        //map4の大きさを縦1倍、横1倍とする
        map4.scale(1, 1);
        //画面内のxが0～288, yが105～283の中から、ランダムな場所にmap4を表示できるようになる
        map4.x = Math.floor(Math.random() * 288);
        map4.y = Math.floor(Math.random() * 178 + 105);
        //map4を画面上に表示する
        game.rootScene.addChild(map4);
        
        
        //chara1.gifを画面上に表示させる
        
        //bearの大きさを縦32ピクセル, 横32ピクセルとする
        bear = new Sprite(32, 32);
        //bear.imageがchara1.gifを指す
        bear.image = game.assets['chara1.gif'];
        //bear.frame=0にすることで、chara1.gifの左上の端から1番目の茶色のクマを選択することができる。数字が1なら2番目、2なら3番目のものを選択する
        bear.frame = 0;
        //bearの大きさを縦1倍、横1倍とする
        bear.scale(1, 1);
        //画面のx=144, y=190の場所にbearを表示できるようになる
        bear.x = 144;
        bear.y = 190;
        //bearにアニメーション追加
        bear.addEventListener('enterframe', function() {
            //←↑→↓キーを押すと、bear.frameが0→1→2→0と変わり、歩いているように見える
            if(game.input.up == 1 || game.input.down == 1 || game.input.right == 1 || game.input.left == 1){
                this.frame++;
                if(this.frame==3){
                    this.frame=0;
                }
            }
            //←↑→↓キーを押していないのであれば、bear.frameは0固定になる
            else this.frame = 0;
            
            //←キーを押すと左へ、↑キーを押すと上へ
            //→キーを押すと右へ、↓キーを押すと下へとbearが移動する
            if(game.input.up)this.y-=4;
            if(game.input.down)this.y+=4;
            if(game.input.right)this.x+=4;
            if(game.input.left)this.x-=4;    
            //画面外や、林よりも上側へと移動しないようにする
            if(this.y<105)this.y=105;
            else if(this.y>284)this.y=284;
            if(this.x<0)this.x=0;
            else if(this.x>288)this.x=288;
            
        });
        //bearを画面上に表示する
        game.rootScene.addChild(bear);
        
        
        //icon0.gifを画面上に表示させる
        
        //for(){～}の処理を15回繰り返す
        for(i=0 ; i<15 ; i++){
            //star[i]の大きさを縦16ピクセル, 横16ピクセルとする
            star[i] = new Sprite(16,16);
            //star[i].imageがicon0.gifを指す
            star[i].image = game.assets['icon0.gif'];
            //star[i].frame=30にすることで、icon0.gifの中から星を選択することができる。
            star[i].frame = 30;
            //star[i]の大きさを縦1倍、横1倍とする
            star[i].scale(1, 1);
            //画面内のxが0～288, yが105～283の中から、ランダムな場所にstar[i]を表示できるようになる
            star[i].x = Math.floor(Math.random() * 288);
            star[i].y = Math.floor(Math.random() * 178 + 105);
            //star[i]にアニメーション追加
            star[i].addEventListener('enterframe', function() {
                //star[i]とbearが衝突すると、衝突したstar[i]は画面上から消える
                if (this.within(bear)) {
                    game.rootScene.removeChild(this);
                    //score加算
                    score++;
                    //加算結果をテキストに反映させる
                    text.text='GETした星の数：' + score;
                }
            });
            //star[i]を画面上に表示する
            game.rootScene.addChild(star[i]);
        }
        
        
        //textを表示する
        
        text = new Label('GETした星の数：' + score);
        //textの大きさを縦1倍、横1倍とする
        text.scale(1, 1);
        //画面のx=0, y=0の場所にtextを表示できるようになる
        text.x = 0;
        text.y = 0;
        //textを画面上に表示する
        game.rootScene.addChild(text);
        
        
        //timeを表示する
        
        time = new Label('経過時間：' + game.time);
        //timeの大きさを縦1倍、横1倍とする
        time.scale(1, 1);
        //画面のx=0, y=20の場所にtimeを表示できるようになる
        time.x = 0;
        time.y = 20;
        //timeにアニメーション追加
        time.addEventListener('enterframe', function() {
            //gameのframeをfpsで割った余りが0であれば、gameの時間を1追加する
            if(game.frame % game.fps == 0){
                game.time++;
                //画面上に表示されているテキストに反映させる
                time.text = '経過時間：' + game.time;
            }
        });
        //timeを画面上に表示する
        game.rootScene.addChild(time);
        
    };
    
    //ゲームをスタートさせる
    game.start();
    
    
    //ゲームの終了処理
    game.onenterframe = function(){
        //score=15かつmap4にbearが衝突したならば、clear.pngを表示してゲームを終了させる
        if(score==15 && map4.within(bear)){
            game.endScene = new SplashScene();
            game.endScene.image = game.assets['clear.png'];
            game.end();
            //else if文に繋げるためにscoreに1を追加する
            score++;
        }
        //scoreが16であれば、アラートを表示する
        else if(score ==16){
            alert("星を15個集めた報酬として、宝箱の中身を入手しました!\n集めるのに掛かった時間は、" + game.time + "秒でした！\n");
            game.onenterframe = null;
        }
        
    };
    
}