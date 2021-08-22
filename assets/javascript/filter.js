  $(document).ready(function() {    
    //filter
    const source = $("#filterTemplate").html();
    const template = Handlebars.compile(source);
    const values = {
      data:[
            {dataFilter : "" , item : "ホテル・旅館"},
            {dataFilter : "" , item : "学校・教育"},
            {dataFilter : "" , item : "デザイン"},
            {dataFilter : "" , item : "サービス"},
            {dataFilter : "" , item : "運送・交通"},
            {dataFilter : "" , item : "食品・飲料"},
            {dataFilter : "" , item : "ファッション"},
            {dataFilter : "" , item : "医療・病院"},
            {dataFilter : "" , item : "アート・芸術"},
            {dataFilter : "" , item : "ウェディング"},
            {dataFilter : "" , item : "旅行"},
            {dataFilter : "" , item : "ビューティー"},
            {dataFilter : "" , item : "車・バイク"},
            {dataFilter : "" , item : "自然"},
            {dataFilter : "" , item : "団体"},
            {dataFilter : "" , item : "スポーツ"},
      ]
    };
    const html = template(values);
    $("#filterBlock1").html(html);
});
  $(document).ready(function() {    
    //filter
    const source = $("#filterTemplate").html();
    const template = Handlebars.compile(source);
    const values = {
      data:[
            {dataFilter : "" , item : "シンプル"},
            {dataFilter : "" , item : "スタイリッシュ"},
            {dataFilter : "" , item : "グラフィカル"},
            {dataFilter : "" , item : "ポップ"},
            {dataFilter : "" , item : "ダイナミック"},
            {dataFilter : "" , item : "エレガント"},
            {dataFilter : "" , item : "キュート・ガーリー"},
            {dataFilter : "" , item : "ナチュラル"},
            {dataFilter : "" , item : "アート・芸術"},
            {dataFilter : "" , item : "グリッド"},
            {dataFilter : "" , item : "イラスト"},
            {dataFilter : "" , item : "和風"},
            {dataFilter : "" , item : "手書き・アナログ"},
            {dataFilter : "" , item : "レトロ"},
            {dataFilter : "" , item : "3D"},
            {dataFilter : "" , item : "ポートフォリオ"},
      ]
    };
    const html = template(values);
    $("#filterBlock2").html(html);
});
$(document).ready(function() { 
    const source = $("#filterTemplate").html();
    const template = Handlebars.compile(source);
    const values = {
      data:[
              {dataFilter : "c1" , item : "カラフル"},
              {dataFilter : "c2" , item : "白"},
              {dataFilter : "c3" , item : "グレー"},
              {dataFilter : "c4" , item : "黒"},
              {dataFilter : "c5" , item : "ベージュ"},
              {dataFilter : "c6" , item : "オレンジ"},
              {dataFilter : "c7" , item : "緑"},
              {dataFilter : "c8" , item : "茶"},
              {dataFilter : "c9" , item : "赤"},
              {dataFilter : "c10" , item : "ピンク"},
              {dataFilter : "c11" , item : "青"},
              {dataFilter : "c12" , item : "紫"},
              {dataFilter : "c13" , item : "金"},
              {dataFilter : "c14" , item : "黄"}, 
      ]
    };
    const html = template(values);
    $("#filterBlock3").html(html);
});