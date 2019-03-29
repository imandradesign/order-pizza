// Business logic
var pizza = new Pizza();

function Pizza(){
  this.toppings = [];
}

Pizza.prototype.allToppings = function(toppingInputs){
  this.toppings.push(toppingInputs)
}

$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();
    var toppingInputs = $("input:checkbox[name=topping]:checked").map(function(){
      return $(this).val()
    });
    pizza.toppings.push(toppingInputs.get());

    $("#result").text(pizza.toppings);
    pizza.toppings = []
  });
});

/* $(document).ready(function(){
  var tmp = [];
  $("input").click(function() {
    if ($(this).is(':checked')) {
      var checked = ($(this).val());
      tmp.push(checked);
    } else {
      tmp.splice($.inArray(checked, tmp),1);
    }
  });

    $('#sub-btn').on('click', function () {
      alert(tmp)
    });
}); */
