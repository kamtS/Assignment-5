
$(document).ready(function() {
   console.log('is this working');
   
   $('#readMore').click(function(e) {
       e.preventDefault();
       $('#show-this-on-click').slideDown();
       $('#readLess').show();
       $('#readMore').hide();
       console.log('stop page jump');
   });
   
   $('#readLess').click(function(e) {
       e.preventDefault();
       $('#show-this-on-click').slideUp();
       $('#readMore').show(300);
       $('#readLess').hide();
   })
   
    $('.learnmore').click(function(e) {
       e.preventDefault();
       $('#learnmoretext').slideDown();
       $('.learnmore').hide();
       console.log('learn more slide down');
   });
   
 /*  $('#readmore').click(function() {
      $('#show-this-on-click').slideDown();
      console.log('reveal this on click');
   });
 */    
});