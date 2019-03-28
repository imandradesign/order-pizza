// Business logic
var pizza = new Pizza();

function Pizza(){
  this.toppings = [];
}

Pizza.prototype.allToppings = function(){
  this.toppings.push(toppingInputs.get())
}

$(document).ready(function(){
  $("form#pizza").click(function(event){
    var toppingInputs = $("input:checkbox[name=topping]:checked").map(function(){
      return $(this).val()
    });

    $("#result").text(toppingInputs.get())
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
