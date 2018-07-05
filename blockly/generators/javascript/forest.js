Blockly.JavaScript['forest'] = function(block) {
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n' +
             '      //背景②(avatarBg3.png)を画面上に表示させる\n' +
             '      //map3の大きさを縦43ピクセル, 横320ピクセルとする\n' +
             '      map3 = new Sprite(320,43);\n' +
             '      //map3.imageが背景②(avatarBg3.png)を指す\n' +
             '      //そして、背景②(avatarBg3.png)の左上の端から\n' +
             '      //縦43ピクセル, 横320ピクセルの大きさで画像を\n' +
             '      //抜き出す\n' +
             '      map3.image = game.assets[' + "'avatarBg3.png'" + '];\n' +
             '      //番号によって、背景②が変わる\n' + 
             '      //0～3のどれか一つを入力する\n' +
             '      map3.frame = ' + value_number + ';\n' +
             '      //map3の大きさを縦1.5倍、横1倍とする\n' +
             '      map3.scale(1, 1.5);\n' +
             '      //画面のx=0, y=85の場所にmap3を\n' +
             '      //表示できるようになる\n' +
             '      map3.x = 0;\n' +
             '      map3.y = 85;\n' +
             '      //map3を画面上に表示する\n' +
             '      game.rootScene.addChild(map3);\n';
  return code;
};