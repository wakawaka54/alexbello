  $(function() {
    $('a[href*="#"]').click(function(event) {
        var el = event.target;
        var href = $(el).attr('href');
        console.log(href);

        var rect = ($(href)[0]).getBoundingClientRect();

        $('html, body').animate({
          scrollTop: rect.top
        }, 1000);

        console.log(rect);

        return false;
    });
  });

  $(function(){
    $("#type").typed({
      strings: ["Hi my name is Alex", "I am an electrical engineer", "Also I am a developer!", "I make a lot of fun things!", "This site is a work in progress!"],
      typeSpeed: 10
    });
  });

  $(function() {
    let refHeight = $('.matchHeight-ref').height();

    $('.matchHeight-el').height(refHeight);
  });

  $(function() {
    $('.slickSlider').each(function(index, el) {
      $(el).slick(
      {
        lazyLoad:'progressive',
        adaptiveHeight: true,
        centerMode: true,
        slideToShow: 1
      });
    });

    $('.slickSlider-wrapper').each(function(index, el) {
        $(el).on('shown.bs.collapse', function() {
          $(".slickSlider", el).resize();
        });
    });
  });

  $(function() {
    $(".vert-timeline-block").each(function(index, el)
    {
      if(!isElementInViewport(el)){
        $(el).find('.vert-timeline-content, .vert-timeline-date').addClass('is-hidden').addClass('animated');
      }
    });
  });

  function isElementInViewport(el) {
    if(typeof jQuery === "function" && el instanceof jQuery)
    {
      el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (rect.top >= 0 && rect.top <= 800);
  }

  function vertTimelineScroll()
  {
    $(".vert-timeline-block").each(function(index,el)
    {
      if(isElementInViewport(el) && $(el).find('.vert-timeline-content, .vert.timeline-date').hasClass('is-hidden'))
      {
        $(el).find('.vert-timeline-content, .vert-timeline-date').removeClass('is-hidden').addClass('fadeIn');
      }
    });
  }

  $(window).scroll(function(e)
  {
    vertTimelineScroll();
  });