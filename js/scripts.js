// Business logic
var pizza = new Pizza();

function Pizza(){
  this.toppings = [];
  this.size = [];
  this.price = 0;
}

Pizza.prototype.fullOrder = function(){
  return "<strong>Size: </strong>" + this.size + "<br><strong>Toppings: </strong>" + this.toppings + "<br><strong>Total: </strong>$" + this.price
}

/* Pizza.prototype.totalCost = function(){
  if (this.size === "Small"){
    this.price += 10
  } else if (this.size === "Medium"){
    this.price += 15
  } else if (this.size === "Large"){
    this.price += 20
  }
}; */


// User logic
$(document).ready(function(){
  $(".results").hide();

  $("form#pizza").submit(function(event){
    event.preventDefault();

    var sizeInput = pizza.size.push($("input:radio[name=size]:checked").val());
    var toppingInputs = $("input:checkbox[name=topping]:checked").map(function(){
      pizza.toppings.push($(this).val());
    });


    $("#order").append(pizza.fullOrder());
    $(".results").show();

    pizza.toppings = [];
    pizza.size = [];
  });
});
