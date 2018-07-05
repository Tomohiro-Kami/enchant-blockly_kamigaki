Blockly.JavaScript['grassland'] = function(block) {
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n' +
             '      //背景③(avatarBg1.png)を画面上に表示させる\n' +
             '      x=0;\n' +
             '      y=141;\n' +
             '      //for(){～}の処理を10回繰り返す\n' +
             '      for(i=0 ; i<10 ; i++){\n' +
             '          //map2[i]の大きさを\n' +
             '          //縦128ピクセル, 横32ピクセルとする\n' +
             '          map2[i] = new Sprite(32,128);\n' +
             '          //map2[i].imageが\n' +
             '          //背景③(avatarBg1.png)を指す\n' +
             '          //そして、背景③(avatarBg1.png)の左上の端から\n' +
             '          //縦128ピクセル, 横32ピクセルの大きさで画像を\n' +
             '          //抜き出す\n' +
             '          map2[i].image = game.assets[' + "'avatarBg1.png'" + '];\n' +
             '          //番号によって、背景③が変わる\n' + 
             '          //0～3のどれか一つを入力する\n' +
             '          map2[i].frame = ' + value_number + ';\n' +
             '          //map2[i]の大きさを縦1.8倍、横1倍とする\n' +
             '          map2[i].scale(1, 1.8);\n' +
             '          //画面のx=map2[i].x, y=map2[i].yの場所に\n' +
             '          //map2[i]を表示できるようになる\n' +
             '          //map2[i].xの値は、0,32,64…と\n' +
             '          //32ずつ増えていく\n' +
             '          //map2[i].yの値は、141で一定である\n' +
             '          map2[i].x = x + (i*32);\n' +
             '          map2[i].y = y;\n' +
             '          //map2[i]を画面上に表示する\n' +
             '          game.rootScene.addChild(map2[i]);\n' +
             '      }\n';
  return code;
};