//top-button visibility
var btn = $('.top-button');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 250) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });
        $(document).ready(function(){
            $('.top-button').on('click',function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
                });
            
            });

            function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
      _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);

 $("#inpt_search").on('focus', function () {
      $(this).parent('label').addClass('active');
  });
  
  $("#inpt_search").on('blur', function () {
      if($(this).val().length == 0)
          $(this).parent('label').removeClass('active');
  });
  
  $("#blog-1").on("click", function() {
    var el = $(this);
    el.text() == el.data("text-swap") 
      ? el.text(el.data("text-original")) 
      : el.text(el.data("text-swap"));
  });

  $("#blog-2").on("click", function() {
    var el = $(this);
    el.text() == el.data("text-swap") 
      ? el.text(el.data("text-original")) 
      : el.text(el.data("text-swap"));
  });

  $("#blog-3").on("click", function() {
    var el = $(this);
    el.text() == el.data("text-swap") 
      ? el.text(el.data("text-original")) 
      : el.text(el.data("text-swap"));
  });

