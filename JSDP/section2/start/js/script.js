(function (win, $) {
  function RedCircle() {}
  RedCircle.prototype.create = function () {
    this.item = $('<div class="circle"></div>');
    return this;
  };
  function BlueCircle() {}
  BlueCircle.prototype.create = function () {
    this.item = $('<div class="circle" style="background:blue"></div>');
    return this;
  };

  CircleFactory = function () {
    this.types = {};
    this.create = function (type) {
      return new this.types[type]().create();
    };

    this.register = function (type, cls) {
      if (cls.prototype.create) {
        this.types[type] = cls;
      }
    };
  };
  // let RedCircle = function () {
  //   this.item = $('<div class="circle"></div>');
  // };
  // let BlueCircle = function () {
  //   this.item = $('<div class="circle" style="background:blue"></div>');
  // };
  // let CircleFactory = function () {
  //   this.create = function (color) {
  //     if (color === "blue") {
  //       return new BlueCircle();
  //     } else {
  //       return new RedCircle();
  //     }
  //   };
  // };

  let CircleGeneratorSingleton = (function () {
    let instance;

    function init() {
      let _aCircle = [],
        _stage = $(".advert"),
        _cf = new CircleFactory();
      _cf.register("red", RedCircle);
      _cf.register("blue", BlueCircle);

      function _position(circle, left, top) {
        circle.css("left", left);
        circle.css("top", top);
      }

      function create(left, top, type) {
        let circle = _cf.create(type).item;
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
      let circle = cg.create(e.pageX - 25, e.pageY - 25, "red");

      cg.add(circle);
    });

    $(document).keypress(function (e) {
      if (e.key == "a") {
        let cg = CircleGeneratorSingleton.getInstance();
        let circle = cg.create(
          Math.floor(Math.random() * 600),
          Math.floor(Math.random() * 600),
          "blue"
        );

        cg.add(circle);
      }
    });
  });
})(window, jQuery);
