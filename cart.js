var i = 0;

var cart = $(".cart_shop");
    lot = $("cart_shop");
    cart_cont = $(".cart_content");
    itog = $('.itog');
    cost = 10;
    remove_cost = $('.remove');

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

function quant_prod(){
  cost = 0
  $('ol li').each(function( index){
    cost += 10;
  })
  itog.empty()
  itog.append("cart cost: " + cost)

  remove_cost = $('.remove')
}

$(".btn-canceling").click(function(){
  cart_cont.empty();
  $('.total_cost').empty();
})

$(".add_cart_button").click(function(){
    cart.append('<li><p class="package" data-name="nikolas" data-dol="10.00"> Nikolas : 10$ </p> <button class="btn-remove remove">X</button></li>');
    $('.remove').on("click", function() {
      $(this).parent().remove();
      quant_prod()
    })
    quant_prod()
})

$('.btn-buy').click(function(){
  var key = 0
  $('ol li').each(function( index){
    let k = $(this).data("name", index).text()
    k = k.substring(0, k.length - 8)
      cart_cont.append(k + "<br>")
    key++;
  })

  $('.total_cost').append('Tax: ' +(key) + "$" + "<br>")
  $('.total_cost').append('Summ: ' + (key)*10 + "$" + "<br>")
  $('.total_cost').append('Summ: with Tax: ' + (key*10+key) + "$")
  
});

$('.btn-accept-buy').click(function(){
  itog.empty()
  cart_cont.empty();
  lot.empty()
  cart.empty()
  $(".equal_1").val("");
  $(".equal_2").val("");
  $(".equal_3").val("");
  alert("Thanks for buyng!");
})

