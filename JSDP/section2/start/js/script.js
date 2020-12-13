(function (win, $) {
  let CircleGeneratorSingleton = (function () {
    let instance;

    function init() {
      let _aCircle = [],
        _stage = $(".advert");

      function _position(circle, left, top) {
        circle.css("left", left);
        circle.css("top", top);
      }

      function create(left, top) {
        let circle = $('<div class="circle"></div>');
        _position(circle, left, top);
        return circle;
      }

      function add(circle) {
        _stage.append(circle);
        _aCircle.push(circle);
      }

      function index() {
        return _aCircle.length;
      }

      return { index: index, create: create, add: add };
    }

    return {
      getInstance: function () {
        if (!instance) {
          instance = init();
        }

        return instance;
      },
    };
  })();

  $(win.document).ready(function () {
    $(".advert").click(function (e) {
      let cg = CircleGeneratorSingleton.getInstance();
      let circle = cg.create(e.pageX - 25, e.pageY - 25);

      cg.add(circle);
    });

    $(document).keypress(function (e) {
      if (e.key == "a") {
        let cg = CircleGeneratorSingleton.getInstance();
        let circle = cg.create(
          Math.floor(Math.random() * 600),
          Math.floor(Math.random() * 600)
        );

        cg.add(circle);
      }
    });
  });
})(window, jQuery);
