var chatModule = (function () {
  var _leadself = "Me:  ",
    _leadcomputer = "PC:   ",
    _aSaid = ["This is a Cyber Chat"],
    _msgYes = "Yes, that's a great idea.",
    _msgNo = "No, that must be a mistake.",
    _aSassyStuff = [
      "Like mold on books, grow myths on history.",
      "She moved like a poem and smiled like a sphinx.",
      "As long as we don’t die, this is gonna be one hell of a story.",
      "She laughed, and the desert sang.",
      "You’ve got about as much charm as a dead slug.",
    ];

  function _echo(msg) {
    _aSaid.push("<div>" + msg + "</div>");

    var aSaidLength = _aSaid.length,
      start = Math.max(_aSaid.length - 6, 0),
      out = "";

    for (var i = start; i < aSaidLength; i++) {
      out += _aSaid[i];
    }

    $(".advert").html(out);
    $("#talk span").text(msg);
  }
  function talk(msg) {
    _echo(_leadself + msg);
  }
  function replyYesNo() {
    var msg = Math.random() > 0.5 ? _msgYes : _msgNo;
    _echo(_leadcomputer + msg);
  }
  function saySassyStuff() {
    var msg = _aSassyStuff[Math.floor(Math.random() * _aSassyStuff.length)];
    _echo(_leadcomputer + msg);
  }

  return {
    talk: talk,
    replyYesNo: replyYesNo,
    saySassyStuff: saySassyStuff,
  };
})();

$(document).ready(function () {
  chatModule.talk("this is graet");
  chatModule.replyYesNo();
  chatModule.saySassyStuff();
});

// Reveal module :
// Can't override those public methods anymore because we don't really have access to them.
// We have access to a referance to them.
// So it's a much more fragile design where it's not really extensible once it's created.

// ------------------
// var com = com || {};
// com.o2geek = com.o2geek || {};
// com.o2geek.packt = com.o2geek.packt || {};
// com.o2geek.packt.JSDP = com.o2geek.packt.JSDP || {};

// com.o2geek.packt.JSDP.sudoChat = {
//   leadself: "Me:  ",
//   leadcomputer: "PC:   ",
//   aSaid: ["This is a Cyber Chat"],
//   msgYes: "Yes, that's a great idea.",
//   msgNo: "No, that must be a mistake.",
//   aSassyStuff: [
//     "Like mold on books, grow myths on history.",
//     "She moved like a poem and smiled like a sphinx.",
//     "As long as we don’t die, this is gonna be one hell of a story.",
//     "She laughed, and the desert sang.",
//     "You’ve got about as much charm as a dead slug.",
//   ],
//   talk: function (msg) {
//     this.echo(this.leadself + msg);
//   },
//   replyYesNo: function () {
//     var msg = Math.random() > 0.5 ? this.msgYes : this.msgNo;
//     this.echo(this.leadcomputer + msg);
//   },
//   saySassyStuff: function () {
//     var msg = this.aSassyStuff[
//       Math.floor(Math.random() * this.aSassyStuff.length)
//     ];
//     this.echo(this.leadcomputer + msg);
//   },
//   echo: function (msg) {
//     this.aSaid.push("<div>" + msg + "</div>");

//     var aSaidLength = this.aSaid.length,
//       start = Math.max(this.aSaid.length - 6, 0),
//       out = "";

//     for (var i = start; i < aSaidLength; i++) {
//       out += this.aSaid[i];
//     }

//     $(".advert").html(out);
//     $("#talk span").text(msg);
//   },
// };
