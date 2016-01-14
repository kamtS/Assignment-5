
$(document).ready(function() {
   console.log('is this working');
   
   $('#readMore').click(function(e) {
       e.preventDefault();
       
       console.log('stop page jump');
   });
   
   $('#show-this-on-click').click(function() {
      
      console.log('reveal this on click');
   });
    
});