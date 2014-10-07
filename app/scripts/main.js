console.log('The Iron Yard Rocks');


var cont = document.getElementById('mainbox');
var imageurl,
    item_price,
    currency,
    shop,
    desc;


items.forEach(function(items){

                        items.results.forEach(function(results) {

                            console.log(results.price);

                            item_price = price;



                            results.Images.forEach(function (images){

                            // console.log(images.url_170x135);


                              imageurl = images.url_170x135;

                            });

                          //  results.Shop.forEach(function (shop){

                            //  console.log(shop.title)


                            //})

                            })
                          });



items.forEach (function(items){

      cont.text('<li>' + results  + '<li>');

    });
