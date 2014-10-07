console.log('The Iron Yard Rocks');


var cont = document.getElementById('mainbox');
var imageurl,
    item_price,
    currency,
    shopname,
    desc;


items.forEach(function(items){

                        items.results.forEach(function(results) {

                            //console.log(results.price);

                            item_price = results.price;

                            currency = results.currency_code;

                            desc = results.title;

                            console.log(results.Shop.title);

                            shopname = results.Shop.title;


                            results.Images.forEach(function (images){

                             // console.log(images.url_170x135);

                              imageurl = images.url_170x135;

                            });


                            //cont.text('<li>' + imageurl + desc + shopname + price + currency  + '<li>');

                          });
                      });
