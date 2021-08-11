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
