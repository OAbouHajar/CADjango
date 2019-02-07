$.fn.closeModal = function () {
  $(".overlay").hide();
  $(this).hide();
  $("body").css("overflow", "auto");
};

$.fn.openModal = function () {
  $(".overlay").show();
  $(this).show();
  $("body").css("overflow", "hidden");
}

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'mac';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'mac';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  } else if (/Android/.test(userAgent)) {
    os = 'linux';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  }

  return os;
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

$(function () {
  $(".overlay, .modal .modal-header a").click(function (event) {
    event.preventDefault();
    $(".modal:visible").closeModal();
  });

  $("body").on("keydown", function (event) {
    var ESCAPE_KEY = 27;
    var key = event.which || event.keyCode;
    if (key == ESCAPE_KEY && $(".modal").is(":visible")) {
      $(".modal:visible").closeModal();
    }
  });

  // Social Share
  $(".post-share .social a").click(function () {
    var url = $(this).attr("href");
    var width = 600;
    var height = 400;
    var left = (screen.width / 2) - (width / 2);
    var top = (screen.height / 2) - (height / 2);
    var strWindowFeatures = "height=" + height + ", width=" + width + ", left=" + left + ", top=" + top + ", menubar=no,location=no,resizable=yes,scrollbars=yes,status=no";
    var windowObjectReference = window.open(url, "SocialShareWindow", strWindowFeatures);
    return false;
  });

  $("header .toggle-menu a").click(function () {
    $("header .menu-left").toggleClass("open");
  });

});
