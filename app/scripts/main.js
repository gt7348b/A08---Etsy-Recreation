console.log('The Iron Yard Rocks');


var cont = document.getElementById('mainbox');
var imageurl,
    item_price,
    currency,
    shopname,
    desc;

var sidebar = ['Item type','Categories', 'Price Filter', 'Filter by Color',
'Ordering Options','Shop Location','Ships To'];

sidebar.forEach(function(title){
  $('.sidebar').append( '<li>' + title + '</li>');

})


//$('.sidebar').append(sidebartitle);

//$('.').text('HASLDKEIWO') // sets the text inside of the element




items.forEach(function(items){

                        items.results.forEach(function(results) {

                            //console.log(results.price);

                            item_price = results.price;

                            currency = results.currency_code;

                            desc = results.title;

                            //console.log(results.Shop.title);

                            shopname = results.Shop.title;


                            results.Images.forEach(function (images){

                            //  console.log(images.url_170x135);

                              imageurl = images.url_170x135;

                            });

                          });



                      });

//$('.item').html('<li>
//    <img src=' + imgageurl + '>
//    <p class="description">'+ desc + '</p>
//    <ul class="bottomimg">
//      <li class="leftimg">' + shopname + '</li>
//      <li class="rightimg">  $' + price + currency'</li>
//    </ul>
//  </li>');
