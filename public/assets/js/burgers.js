// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {


  $(".submit_button").on("click", function(event) {

    const new_burger = $("#newburger").val();
    if (new_burger) {

      // create new burger
      $.ajax("/api/burgers", {
        type: "POST",
        data: { name: new_burger}
      }).then(
        function() {
          console.log("Added burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );

    } else {
      alert("Seriously? please provide a burger name.");
    }
    
  });






   
  
  });
