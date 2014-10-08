console.log('The Iron Yard Rocks');


var cont = document.getElementById('mainbox');
var imageurl,
    item_price,
    currency,
    shopname,
    desc;

var sidebar = ['Item type','Categories', 'Price Filter', 'Filter by Color',
'Ordering Options','Shop Location','Ships To'];

//sidebar.forEach(function(title){
//  $('.sidebar').append( '<li>' + title + '</li>');

//});



items.forEach(function(items){

                        items.results.forEach(function(results) {

                            //console.log(results.price);

                            item_price = results.price;

                            currency = results.currency_code;

                            console.log(results.title);

                            desc = results.title;

                            //console.log(results.Shop.title);

                            shopname = results.Shop.title;


                            results.Images.forEach(function (images){

                            // console.log(images.url_170x135);

                              imageurl = images.url_170x135;

                            });

                            $('.forsale').append( '<li><div class="item"><img src=' + imageurl + '>' + '<p class="description">' + desc + '</p> <ul class="bottomimg"><li class="leftimg">' + shopname + '</li>' + '<li class="rightimg"> $' + item_price + '  ' + currency + '</li></ul><p class="ad">Ad</p><p class="hamburger"><img src="https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/hamburger.png"</p><p class="heart"><img src="https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/heart.png"</p></div></li>' );

                            //$('.forsale').append('<li>
                              //                       <div class="item">
                                //                        <img src=' + imgageurl + '>
                                  //                      <p class="description">'+ desc + '</p>
                                    //                    <ul class="bottomimg">
                                      //                    <li class="leftimg">' + shopname + '</li>
                                        //                  <li class="rightimg">  $' + price + currency'</li>
                                          //              </ul>
                                            //            <p class="ad">Ad</p>
                                              //          <p class"hamburger"><img src="https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/hamburger.png"</p>
                                                //        <p class="heart"><img src="https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/heart.png"</p>
                                                  //    </div>
                                                    //</li>');

                          });

//
                      });


//$('.description').text(desc);

//$('.rightimg').text("$"+item_price + "  " +currency);
