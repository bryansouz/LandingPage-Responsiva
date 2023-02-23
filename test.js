$('.button').click(function(){
    console.log('a');
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });


  /* Function to control testimonials messages */
(function(){
  const btnLeft = document.querySelector('.arrow-left');
  const btnRight = document.querySelector('.arrow-right');
  const ul = document.querySelector('.testimonials-stories ul');
  const li = document.querySelectorAll('.testimonials-stories ul li');
  let init = 0;
  let amount = 20;

     btnRight.addEventListener("click", function() {
    if (init < (li.length - 1) * amount) {
      init += amount;
      ul.style.transform = "translateX(-" + init + "%)";
      index++;
    } else {
      ul.style.transform = "translateX(-" + 0 + "%)";
      init = 0
      index = 0;
    }
    for (var i = 0; i < li.length; i++) {
        // li[i].className = " ";
        li[i].className = li[i].className.replace(/\bactive\b/g, "");
        li[index].className = 'active';
    }
  });

  btnLeft.addEventListener("click", function() {
    if (init > 0) {
      init -= amount;
      ul.style.transform = "translateX(-" + init + "%)";
      index--;
    } else {
      init = ((li.length - 1) * amount);
      ul.style.transform = "translateX(-" + init + "%)";
      index = 4;
    }
    for (var i = 0; i < li.length; i++) {
        // li[i].className = " ";
        li[i].className = li[i].className.replace(/\bactive\b/g, "");
        li[index].className = 'active';
    }
  });
}());
