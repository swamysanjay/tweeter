$(document).ready(function() {
  const maxChar = 140;
  let result = 0;
  //Create counter that looks subtracts the characters inside the textarea
  $(".new-tweet textarea").on("input", function() {
    let counter = $(this).val().length;
    const element = $(".counter");
    result = maxChar - counter;
    //(counter).text(maxChar - $(this).val().length);
    if (counter > maxChar) {
      element.addClass('over');
    } else {
      element.removeClass('over');
    }
    /*if ($(this).val().length > maxChar) {
      $($counter).addClass('over');
    }
    if ($(this).val().length <= maxChar) {
      $($counter).removeClass('over');
    } */
    element.text(result);
    console.log(element);
  });
  // --- our code goes here ---
});