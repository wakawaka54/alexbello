  /*$(function() {
    $("[data-collapse]").click(function(event){
        var el = event.target;
        var openEl = $(el).attr('data-target');

        $(openEl).removeClass("navbar-collapse").removeClass('collapse');

        $(openEl).height(0);
        $(openEl).animate({
          height:300px;
        }, 1000);
    });
  });*/

  var scrollTo_MaxElement = 0;
  var scrollElements;
  var scrollElementsPos = [];
  var scrollToElements = [];
  var scrollToElementsPos = [];
  var scrollDiff = 0;
  var scrollStart = 0;

  $(function(){

    scrollElements = $('a[data-scroll]');
    var scroll_MaxElement = 0;
    var scroll_MinElement = 99999;

    console.log(scrollElements);
    scrollElements.sort(function(a, b) { return $(a).offset().top - $(b).offset().top; });
    console.log(scrollElements);
    $('a[data-scroll]').each(function(index, element){

        scrollElementsPos.push($(element).offset().top - $('body').scrollTop());

        var href = $(element).attr('href');
        scrollToElementsPos.push($(href).offset().top);
        if($(href).offset().top > scrollTo_MaxElement)
        {
          scrollTo_MaxElement = $(href).offset().top;
        }
    });

    console.log(scrollToElementsPos);

    scrollDiff = $(scrollElements[scrollElements.length - 1]).offset().top - $(scrollElements[0]).offset().top;
    scrollStart = $(scrollElements[0]).offset().top;
        $('#ballo-scrollo').css( 'top', scrollStart + "px");

    $(document).scroll(function(e) {
        var scrollPos = $('body').scrollTop();

        if(scrollPos > scrollToElementsPos[scrollToElementsPos.length - 1]) { $('#ballo-scrollo').css( 'top', scrollElementsPos[scrollElementsPos.length - 1] + "px"); }

        for(var i = 0; i != scrollToElementsPos.length; i++)
        {
            if(scrollPos < scrollToElementsPos[i])
            {
              let fromI = i - 1;
              scrollPos = scrollElementsPos[fromI] + ((scrollElementsPos[i] - scrollElementsPos[fromI]) * (scrollPos - scrollToElementsPos[fromI]) / (scrollToElementsPos[i] - scrollToElementsPos[fromI]));
              $('#ballo-scrollo').css( 'top', scrollPos + "px");
              break;
            }
        }
    });

  });

  $(function() {
    $('a[data-scroll]').click(function(event) {
        var el = event.target;
        var href = $(el).attr('href');

        var scrollTo = $(href).offset().top - 20;

        $(el).blur();

        $('html, body').animate({
          scrollTop: scrollTo + "px"
        }, 1000);

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

    if(window.innerWidth < 992) { return; }

    let refHeight = $('.matchHeight-ref').height();

    $('.matchHeight-el').height(refHeight);
  });

  $(function() {
    $('.slickSlider').each(function(index, el) {
      $(el).slick(
      {
        lazyLoad:'progressive',
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