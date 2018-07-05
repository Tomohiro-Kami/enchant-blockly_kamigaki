Blockly.JavaScript['mountain'] = function(block) {
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n' +
             '      //背景①(avatarBg2.png)を画面上に表示させる\n' +
             '      //map1の大きさを縦50ピクセル, 横320ピクセルとする\n' +
             '      map1 = new Sprite(320,50);\n' +
             '      //map1.imageが背景①(avatarBg2.png)を指す\n' +
             '      //そして、背景①(avatarBg2.png)の左上の端から\n' +
             '      //縦50ピクセル, 横320ピクセルの大きさで画像を\n' +
             '      //抜き出す\n' +
             '      map1.image = game.assets[' + "'avatarBg2.png'" + '];\n' +
             '      //番号によって、背景①が変わる\n' + 
             '      //0～3のどれか一つを入力する\n' +
             '      map1.frame = ' + value_number + ';\n' +
             '      //map1の大きさを縦2倍、横1倍とする\n' +
             '      map1.scale(1, 2);\n' +
             '      //画面のx=0, y=20の場所にmap1を\n' +
             '      //表示できるようになる\n' +
             '      map1.x=0;\n' +
             '      map1.y=20;\n' +
             '      //map1を画面上に表示する\n' +
             '      game.rootScene.addChild(map1);\n';
  return code;
};