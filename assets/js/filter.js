//filter Industry
const source_industryInsert = $("#industryInsert").html();
const template_industryInsert = Handlebars.compile(source_industryInsert);
const values_industryInsert = {
    filterIndustryItem: [{
            "itemNum": "item",
            "itemName": "ホテル・旅館"
        },
        {
            "itemNum": "item",
            "itemName": "学校・教育"
        },
        {
            "itemNum": "item",
            "itemName": "デザイン"
        },
        {
            "itemNum": "item",
            "itemName": "サービス"
        },
        {
            "itemNum": "item",
            "itemName": "運送・交通"
        },
        {
            "itemNum": "item",
            "itemName": "食品・飲料"
        },
        {
            "itemNum": "item",
            "itemName": "ファッション"
        },
        {
            "itemNum": "item",
            "itemName": "医療・病院"
        },
        {
            "itemNum": "item",
            "itemName": "ウェディング"
        },
        {
            "itemNum": "item",
            "itemName": "アート・芸術"
        },
        {
            "itemNum": "item",
            "itemName": "旅行"
        },
        {
            "itemNum": "item",
            "itemName": "ビューティー"
        },
        {
            "itemNum": "item",
            "itemName": "車・バイク"
        },
        {
            "itemNum": "item",
            "itemName": "自然"
        },
        {
            "itemNum": "item",
            "itemName": "団体"
        },
        {
            "itemNum": "item",
            "itemName": "スポーツ"
        }
    ]
};
const html_industryInsert = template_industryInsert(values_industryInsert);
$("#filterIndustryItem").html(html_industryInsert);

//filter Style
const source_styleInsert = $("#styleInsert").html();
const template_styleInsert = Handlebars.compile(source_styleInsert);
const values_styleInsert = {
    filterStyleItem: [{
            "itemNum": "item",
            "itemName": "シンプル"
        },

        {
            "itemNum": "item",
            "itemName": "スタイリッシュ"
        },

        {
            "itemNum": "item",
            "itemName": "グラフィカル"
        },

        {
            "itemNum": "item",
            "itemName": "ポップ"
        },

        {
            "itemNum": "item",
            "itemName": "ダイナミック"
        },

        {
            "itemNum": "item",
            "itemName": "エレガント"
        },

        {
            "itemNum": "item",
            "itemName": "キュート・ガーリー"
        },

        {
            "itemNum": "item",
            "itemName": "ナチュラルアート・芸術"
        },

        {
            "itemNum": "item",
            "itemName": "グリッド"
        },

        {
            "itemNum": "item",
            "itemName": "イラスト和風"
        },

        {
            "itemNum": "item",
            "itemName": "手書き・アナログ"
        },

        {
            "itemNum": "item",
            "itemName": "レトロ"
        },

        {
            "itemNum": "item",
            "itemName": "3D"
        },

        {
            "itemNum": "item",
            "itemName": "ポートフォリオ"
        },
    ]
};
const html_styleInsert = template_styleInsert(values_styleInsert);
$("#filterStyleItem").html(html_styleInsert);

//filter Colour
const source_colourInsert = $("#colourInsert").html();
const template_colourInsert = Handlebars.compile(source_colourInsert);
const values_colourInsert = {
    filterColourItem: [{
        "itemNum": "item",
        "itemName": "カラフル"
    }, {
        "itemNum": "item",
        "itemName": "白"
    }, {
        "itemNum": "item",
        "itemName": "グレー"
    }, {
        "itemNum": "item",
        "itemName": "黒"
    }, {
        "itemNum": "item",
        "itemName": "ベージュ"
    }, {
        "itemNum": "item",
        "itemName": "オレンジ"
    }, {
        "itemNum": "item",
        "itemName": "緑"
    }, {
        "itemNum": "item",
        "itemName": "茶"
    }, {
        "itemNum": "item",
        "itemName": "赤"
    }, {
        "itemNum": "item",
        "itemName": "ピンク"
    }, {
        "itemNum": "item",
        "itemName": "青"
    }, {
        "itemNum": "item",
        "itemName": "紫"
    }, {
        "itemNum": "item",
        "itemName": "金"
    }, {
        "itemNum": "item",
        "itemName": "黄"
    }]
};
const html_colourInsert = template_colourInsert(values_colourInsert);
$("#filterColourItem").html(html_colourInsert);