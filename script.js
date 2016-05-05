 <script>
function myFunction() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}
</script>

<script type="text/javascript">

var make_button_active = function()
{
  //Get item siblings
  var siblings =($(this).siblings());

  //Remove active class on all buttons
  siblings.each(function (index)
    {
      $(this).removeClass('active');
    }
  )


  //Add the clicked button class
  $(this).addClass('active');
}

//Attach events to menu
$(document).ready(
  function()
  {
    $(".nav li").click(make_button_active);
  }  
)

</script>

<script>
(function() {

    // Only load images if the browser 'cuts the mustard' <http://responsivenews.co.uk/post/18948466399/cutting-the-mustard/>
    if ( ! document.addEventListener || ! document.querySelector) {
        return alert("This page is \"cutting the mustard\" and your browser didn't make it.");
    }

    var deferImage = function(element) {
        var i, len, attr;
        var img = new Image();
        var placehold = element.children[0];

        element.className+= ' is-loading';

        img.onload = function() {
            element.className = element.className.replace('is-loading', 'is-loaded');
            element.replaceChild(img, placehold);
        };

        for (i = 0, len = placehold.attributes.length; i < len; i++) {
            attr = placehold.attributes[i];

            if (attr.name.match(/^data-/)) {
                img.setAttribute(attr.name.replace('data-', ''), attr.value);
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var placeholders = document.querySelectorAll('.defer-image');

        for (var i = 0, len = placeholders.length; i < len; i++) {
            deferImage(placeholders[i]);
        }
    });

})();
</script>
 
