import $ from 'jquery'

$(function() {
  // Hide undisplayed slide.
  $('#force-slider .slide-item').each(function(index) {
    if (index != 0) {
      $(this).removeClass('d-none').hide('fast')
    }
  })

  const slideLength = $('#force-slider .slide-item').length

  var currentSlide = 0;

  setInterval(function() {

    //Get the current slide item
    const slideItem = $('#force-slider .slide-item:nth('+currentSlide+')')
    
    // Hide slide
    $(slideItem).fadeOut(1000, function() {
      if(currentSlide == slideLength - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

      // Wait 500ms before displaying the next slide
      setTimeout(function() {
        $('#force-slider .slide-item:nth('+currentSlide+')').fadeIn(1000);        
      }, 500)
    });
    
    
  }, 5000)
  console.log('document ready')
});