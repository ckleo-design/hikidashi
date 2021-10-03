     const source = $("#sampleInsert").html();
     const template = Handlebars.compile(source);
     const values = {
         sample: [{
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             },
             {
                 "siteLink": "https://www.google.com/",
                 "siteTitle": "試しタイトル",
                 "siteThumbnail": "http://placehold.jp/290x215.png"
             }
         ]
     };
     const html = template(values);
     $("#sampleContent").html(html);
     const listNum = values.sample.length;
     $(".allListNum").html(`(${listNum})`)
     console.log(listNum);