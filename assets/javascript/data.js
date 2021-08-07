  $(document).ready(function() {


    // filter
    var source = $("#displayTemplate").html();
    var template = Handlebars.compile(source);
    var values = {
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
          var html = template(values);
          $("#displaySection").html(html);
});