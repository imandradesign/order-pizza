// Business logic
var pizza = new Pizza();

function Pizza(){
  this.toppings = [];
  this.size = [];
  this.price = 0;
}

Pizza.prototype.isEmpty = function() {
  if (this.toppings.length === 0){
    alert("Please select at least one topping");
    $(".results").hide();
  }
}

Pizza.prototype.fullOrder = function(){
  return "<span id='order'><strong>Size: </strong>" + this.size + "<br><br><strong>Toppings: </strong>" + this.toppings + "<br><br><strong>Total: </strong>$" + this.price + "</span>"
}

Pizza.prototype.totalCost = function(){
  var size = $("input:radio[name=size]:checked").val();
  if (size === "Small"){
    this.price = 10
  } else if (size === "Medium"){
    this.price = 15
  } else if (size === "Large"){
    this.price = 20
  }

  if (this.toppings.length > 1){
    for (var i = 0; i < this.toppings.length - 1; i++){
      this.price = this.price + 1;
    }
  }
};



// User logic
$(document).ready(function(){
  $(".results").hide();

  $("form#pizza").submit(function(event){
    event.preventDefault();

    var sizeInput = pizza.size.push($("input:radio[name=size]:checked").val());
    var toppingInputs = $("input:checkbox[name=topping]:checked").map(function(){
      pizza.toppings.push($(this).val());
    });

    pizza.totalCost();

    $("#order").remove();
    $("#results").append(pizza.fullOrder());
    $(".results").show();

    pizza.isEmpty();

    pizza.toppings = [];
    pizza.size = [];
    this.price = 0;
  });
});
