  $(document).ready(function() {    
    // website 
    const source = $("#displayTemplate").html();
    const template = Handlebars.compile(source);
    const values = {
        data:[
              {category : "cat1",siteUrl : "https://muuuuu.org/", siteImg : "cat1" , siteName : "栃木県のホームページ制作・WEB制作\nRe:design アールイーデザイン"},
              {category : "cat1",siteUrl : "https://muuuuu.org/", siteImg : "cat1" , siteName : "確認サンプサイトTitle1"},
              {category : "cat1",siteUrl : "https://muuuuu.org/", siteImg : "cat1" , siteName : "確認サンプサイトTitle1"},
              {category : "cat1",siteUrl : "https://muuuuu.org/", siteImg : "cat1" , siteName : "確認サンプサイトTitle1"},
              {category : "cat2",siteUrl : "https://muuuuu.org/", siteImg : "cat2" , siteName : "確認サンプサイトTitle2"},
              {category : "cat2",siteUrl : "https://muuuuu.org/", siteImg : "cat2" , siteName : "確認サンプサイトTitle2"},
              {category : "cat2",siteUrl : "https://muuuuu.org/", siteImg : "cat2" , siteName : "確認サンプサイトTitle2"},
              {category : "cat2",siteUrl : "https://muuuuu.org/", siteImg : "cat2" , siteName : "確認サンプサイトTitle2"},
              {category : "cat3",siteUrl : "https://muuuuu.org/", siteImg : "cat3" , siteName : "確認サンプサイトTitle3"},
              {category : "cat3",siteUrl : "https://muuuuu.org/", siteImg : "cat3" , siteName : "確認サンプサイトTitle3"},
              {category : "cat3",siteUrl : "https://muuuuu.org/", siteImg : "cat3" , siteName : "確認サンプサイトTitle3"},
              {category : "cat3",siteUrl : "https://muuuuu.org/", siteImg : "cat3" , siteName : "確認サンプサイトTitle3"},
            ]
          };
          const html = template(values);
          $("#displaySection").html(html);
});
$(document).ready(function() {    
    //filter
    const source = $("#filterTemplate").html();
    const template = Handlebars.compile(source);
    const values = {
      data:[
            {item : "シンプル"},
            {item : "スタイリッシュ"},
            {item : "タイポグラフィ"},
            {item : "グラフィカル"},
            {item : "ポップ"},
            {item : "ダイナミック"},
            {item : "エレガント"},
            {item : "キュート・ガーリー"},
            {item : "ナチュラル"},
            {item : "アート・芸術"},
            {item : "グリッド"},
            {item : "イラスト"},
            {item : "和風"},
            {item : "手書き・アナログ"},
            {item : "レトロ"},
            {item : "3D"},
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
              {item : "カラフル"},
              {item : "白"},
              {item : "グレー"},
              {item : "黒"},
              {item : "ベージュ"},
              {item : "オレンジ"},
              {item : "緑"},
              {item : "茶"},
              {item : "赤"},
              {item : "ピンク"},
              {item : "青"},
              {item : "紫"},
              {item : "金"},
              {item : "黄"}, 
      ]
    };
    const html = template(values);
    $("#filterBlock2").html(html);
});