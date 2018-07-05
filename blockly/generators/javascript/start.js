Blockly.JavaScript['start'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'enchant();\n' + 
             'window.onload = function() {\n' +
             '  //表示される画面の大きさを、縦320, 横320とする\n' +
             '  var game = new Game(320, 320);\n' +
             '  //背景・キャラクター・アイテムとして用いる画像を\n' +
             '  //読み込む\n' +
             '  game.preload(' + "'avatarBg1.png'" + ',' + "'avatarBg2.png'" + ',' + '\n' + 
             "               'avatarBg3.png'" + ',' + "'chara1.gif'" + ',' + '\n' +
             "               'map0.png'" + ',' + "'icon0.gif'" + ',' + '\n'+
             "               'clear.png'" +');\n' +
             '  //表示される画面の色を黒色にする\n' +
             '  game.rootScene.backgroundColor="Black";\n' +
             '  //fpsを10にすることで、\n' +
             '  //1秒間におけるframe数を10にすることができる\n' +
             '  game.fps = 10;\n' +
             '  //ゲーム内の経過時間をカウントするためのもの\n' +
             '  game.time = 0;\n' +
             '  var map1;\n' +
             '  var map2 = Array();\n' +
             '  var map3;\n' +
             '  var map4;\n' +
             '  var bear;\n' +
             '  var star = Array();\n' +
             '  var text;\n' +
             '  var time;\n' +
             '  //クマと衝突して消えた星の数をカウント(最大で15)\n' +
             '  score=0;\n';
  return code;
};