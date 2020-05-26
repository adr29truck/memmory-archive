$(window).bind("load", function () {
  $('.loader-page')[0].style = 'width: 0;'
  setTimeout(function () {
    $('.loader-page')[0].outerHTML = ''
  }, 205)

  if (document.querySelectorAll('.alert').length > 0) {
    alert_text = document.querySelector('.alert').innerHTML
    M.toast({html: alert_text})
  }
});

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // init Infinite Scroll
  $('.article-feed').infiniteScroll({
    path: '.pagination__next',
    append: 'figure',
    status: '.scroller-status',
    hideNav: '.pagination',
    prefill: true,
  });

  $('.article-feed').on('append.infiniteScroll', function(event, response, path, items ) {
    // parse JSON
    console.log(response)
    console.log(items)
    $(items).find('.materialboxed').materialbox();
    
    // response.$
    // var data = JSON.parse(response);
    // do something with JSON...
  });

  // init Materialize
  $('.materialboxed').materialbox();
  var elems = $('.slider');
  var options = {
    'duration': 500,
    'height': 400
  }
  var instances = M.Slider.init(elems, options);
  
  $('.collapsible').collapsible();  
});

function modalShow(el) {
  $(el).parent().find('.modal')[0].style.display = 'block';
}

function modalHide(el) {
  $(el).parent()[0].style.display = 'none';
}

function flash(elem) {
  console.log('FLAAASH')
  $(elem)[0].classList.remove('alert-initial')
}

function getFileData(myFile) {

  var filename = myFile.files[0].name;
  if (myFile.files.length > 1) {
    filename += " +"
    filename += myFile.files.length - 1
    filename += " "
  }
  $(myFile).parent().find('.file-label')[0].innerHTML = filename
}


function expandNav(el) {
  $(el).parent().children()[1].classList.toggle('expanded')
}


function hideAlert(el) {
  $(el).parent().parent()[0].outerHTML = ''
}

