// Business logic
var pizza = new Pizza();

function Pizza(){
  this.toppings = [];
  this.size = [];
}


// User logic
$(document).ready(function(){
  $(".results").hide();

  $("form#pizza").submit(function(event){
    event.preventDefault();

    var sizeInput = pizza.size.push($("input:radio[name=size]:checked").val());
    var toppingInputs = $("input:checkbox[name=topping]:checked").map(function(){
      pizza.toppings.push($(this).val())
    });


    $("#size").text(pizza.size)
    $("#toppingList").text(pizza.toppings);
    $(".results").show();

    pizza.toppings = [];
    pizza.size = [];
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
