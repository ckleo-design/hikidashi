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
    $("#filterBlock1").html(html);
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
    $("#filterBlock2").html(html);
});
  $(document).ready(function() {    
    // website 
    const source = $("#displayTemplate").html();
    const template = Handlebars.compile(source);
    const values = {
        data:[
              {category : "c1",siteUrl : "http://www.pushhere.com/", siteImg : "pushhere" , siteName : "Push | Branding, Integrated Marketing & \nInteractive Agency"},
              {category : "['cat1','cat2']",siteUrl : "https://dpt.co/en/", siteImg : "dpt" , siteName : "Dpt. | A creative innovation studio | \nAR, VR, MR | Montreal"},

            ]
          };
          const html = template(values);
          $("#displaySection").html(html);
});
