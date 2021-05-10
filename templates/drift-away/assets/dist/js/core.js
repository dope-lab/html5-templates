var core = (function($, window, document, undefined) {
  'use strict';

  var scrollTo = function ($el) {
    $('html, body').animate({ scrollTop: $el.offset().top}, 1000);
  }

  var parallaxText = function ($elem) {
    var tmp = $($elem).css('text-shadow').match(/(-?\d+px)|(rgb\(.+\))/g)
    var color = tmp[0],
    y = tmp[1].match(/\d+/),
    x = tmp[2].match(/\d+/),
    blur = tmp[3];

    $('body').mousemove( function(e) {
        var _w = window.innerWidth/2;
        var _h = window.innerHeight/2;
        var _mouseX = e.clientX;
        var _mouseY = e.clientY;
        var _depthX = x - (_mouseX - _w) * 0.01 + 'px';
        var _depthY =  y - (_mouseY - _h) * 0.02 + 'px'
        var prop = _depthX + ' ' +  _depthY + ' ' + blur + ' ' + color;
        $($elem).css('textShadow',prop);
    })
  }

  var polyfills = function () {
    // https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    if (!String.prototype.padStart) {
      String.prototype.padStart = function padStart(targetLength, padString) {
          targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
          padString = String(typeof padString !== 'undefined' ? padString : ' ');
          if (this.length >= targetLength) {
              return String(this);
          } else {
              targetLength = targetLength - this.length;
              if (targetLength > padString.length) {
                  padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
              }
              return padString.slice(0, targetLength) + String(this);
          }
      };
    }
  }

  return {
    init: function () {
      polyfills();
      parallaxText('#text__p');
    },

    queue: function (module) {
      $(document).ready(function () {
        module.init();
      });
    },

    scrollTo: function ($el) {
      return scrollTo($el);
    },

  }
})(jQuery, window, document);
core.queue(core);
var core = (function($, window, document, undefined) {
  'use strict';

  var scrollTo = function ($el) {
    $('html, body').animate({ scrollTop: $el.offset().top}, 1000);
  }

  var parallaxText = function ($elem) {
    var tmp = $($elem).css('text-shadow').match(/(-?\d+px)|(rgb\(.+\))/g)
    var color = tmp[0],
    y = tmp[1].match(/\d+/),
    x = tmp[2].match(/\d+/),
    blur = tmp[3];

    $('body').mousemove( function(e) {
        var _w = window.innerWidth/2;
        var _h = window.innerHeight/2;
        var _mouseX = e.clientX;
        var _mouseY = e.clientY;
        var _depthX = x - (_mouseX - _w) * 0.01 + 'px';
        var _depthY =  y - (_mouseY - _h) * 0.02 + 'px'
        var prop = _depthX + ' ' +  _depthY + ' ' + blur + ' ' + color;
        $($elem).css('textShadow',prop);
    })
  }

  var polyfills = function () {
    // https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    if (!String.prototype.padStart) {
      String.prototype.padStart = function padStart(targetLength, padString) {
          targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
          padString = String(typeof padString !== 'undefined' ? padString : ' ');
          if (this.length >= targetLength) {
              return String(this);
          } else {
              targetLength = targetLength - this.length;
              if (targetLength > padString.length) {
                  padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
              }
              return padString.slice(0, targetLength) + String(this);
          }
      };
    }
  }

  return {
    init: function () {
      polyfills();
      parallaxText('#text__p');
    },

    queue: function (module) {
      $(document).ready(function () {
        module.init();
      });
    },

    scrollTo: function ($el) {
      return scrollTo($el);
    },

  }
})(jQuery, window, document);
core.queue(core);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29yZSA9IChmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBzY3JvbGxUbyA9IGZ1bmN0aW9uICgkZWwpIHtcclxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkZWwub2Zmc2V0KCkudG9wfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICB2YXIgcGFyYWxsYXhUZXh0ID0gZnVuY3Rpb24gKCRlbGVtKSB7XHJcbiAgICB2YXIgdG1wID0gJCgkZWxlbSkuY3NzKCd0ZXh0LXNoYWRvdycpLm1hdGNoKC8oLT9cXGQrcHgpfChyZ2JcXCguK1xcKSkvZylcclxuICAgIHZhciBjb2xvciA9IHRtcFswXSxcclxuICAgIHkgPSB0bXBbMV0ubWF0Y2goL1xcZCsvKSxcclxuICAgIHggPSB0bXBbMl0ubWF0Y2goL1xcZCsvKSxcclxuICAgIGJsdXIgPSB0bXBbM107XHJcblxyXG4gICAgJCgnYm9keScpLm1vdXNlbW92ZSggZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBfdyA9IHdpbmRvdy5pbm5lcldpZHRoLzI7XHJcbiAgICAgICAgdmFyIF9oID0gd2luZG93LmlubmVySGVpZ2h0LzI7XHJcbiAgICAgICAgdmFyIF9tb3VzZVggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgdmFyIF9tb3VzZVkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgdmFyIF9kZXB0aFggPSB4IC0gKF9tb3VzZVggLSBfdykgKiAwLjAxICsgJ3B4JztcclxuICAgICAgICB2YXIgX2RlcHRoWSA9ICB5IC0gKF9tb3VzZVkgLSBfaCkgKiAwLjAyICsgJ3B4J1xyXG4gICAgICAgIHZhciBwcm9wID0gX2RlcHRoWCArICcgJyArICBfZGVwdGhZICsgJyAnICsgYmx1ciArICcgJyArIGNvbG9yO1xyXG4gICAgICAgICQoJGVsZW0pLmNzcygndGV4dFNoYWRvdycscHJvcCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdmFyIHBvbHlmaWxscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91eGl0dGVuL3BvbHlmaWxsL2Jsb2IvbWFzdGVyL3N0cmluZy5wb2x5ZmlsbC5qc1xyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL3BhZFN0YXJ0XHJcbiAgICBpZiAoIVN0cmluZy5wcm90b3R5cGUucGFkU3RhcnQpIHtcclxuICAgICAgU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCA9IGZ1bmN0aW9uIHBhZFN0YXJ0KHRhcmdldExlbmd0aCwgcGFkU3RyaW5nKSB7XHJcbiAgICAgICAgICB0YXJnZXRMZW5ndGggPSB0YXJnZXRMZW5ndGggPj4gMDsgLy90cnVuY2F0ZSBpZiBudW1iZXIsIG9yIGNvbnZlcnQgbm9uLW51bWJlciB0byAwO1xyXG4gICAgICAgICAgcGFkU3RyaW5nID0gU3RyaW5nKHR5cGVvZiBwYWRTdHJpbmcgIT09ICd1bmRlZmluZWQnID8gcGFkU3RyaW5nIDogJyAnKTtcclxuICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSB0YXJnZXRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0YXJnZXRMZW5ndGggPSB0YXJnZXRMZW5ndGggLSB0aGlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICBpZiAodGFyZ2V0TGVuZ3RoID4gcGFkU3RyaW5nLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICBwYWRTdHJpbmcgKz0gcGFkU3RyaW5nLnJlcGVhdCh0YXJnZXRMZW5ndGggLyBwYWRTdHJpbmcubGVuZ3RoKTsgLy9hcHBlbmQgdG8gb3JpZ2luYWwgdG8gZW5zdXJlIHdlIGFyZSBsb25nZXIgdGhhbiBuZWVkZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBhZFN0cmluZy5zbGljZSgwLCB0YXJnZXRMZW5ndGgpICsgU3RyaW5nKHRoaXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcG9seWZpbGxzKCk7XHJcbiAgICAgIHBhcmFsbGF4VGV4dCgnI3RleHRfX3AnKTtcclxuICAgIH0sXHJcblxyXG4gICAgcXVldWU6IGZ1bmN0aW9uIChtb2R1bGUpIHtcclxuICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vZHVsZS5pbml0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzY3JvbGxUbzogZnVuY3Rpb24gKCRlbCkge1xyXG4gICAgICByZXR1cm4gc2Nyb2xsVG8oJGVsKTtcclxuICAgIH0sXHJcblxyXG4gIH1cclxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcclxuY29yZS5xdWV1ZShjb3JlKTsiXX0=
