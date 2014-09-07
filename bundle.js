(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var cool = require('cool-ascii-faces');

function spin () {
  var face = cool();
  p.textContent = face;
  document.title = face;
  if (spinning) requestAnimationFrame(spin);
}

var spinning = false;
var p = document.createElement('p');
spin();

p.addEventListener('mouseenter', function () {
  spinning = true;
  spin();
}, false);

p.addEventListener('mouseleave', function () { spinning = false; }, false);

document.body.appendChild(p);

},{"cool-ascii-faces":2}],2:[function(require,module,exports){
//var spigot = require("stream-spigot")

var faces = [
  "( .-. )",
  "( .o.)",
  "( `·´ )",
  "( ° ͜ ʖ °)",
  "( ͡° ͜ʖ ͡°)",
  "( ⚆ _ ⚆ )",
  "( ︶︿︶)",
  "( ﾟヮﾟ)",
  "(\\/)(°,,,°)(\\/)",
  "(¬_¬)",
  "(¬º-°)¬",
  "(¬‿¬)",
  "(°ロ°)☝",
  "(´・ω・)っ",
  "(ó ì_í)",
  "(ʘᗩʘ')",
  "(ʘ‿ʘ)",
  "(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄",
  "(͡° ͜ʖ ͡°)",
  "(ಠ_ಠ)",
  "(ಠ‿ಠ)",
  "(ಠ⌣ಠ)",
  "(ಥ_ಥ)",
  "(ಥ﹏ಥ)",
  "(ง ͠° ͟ل͜ ͡°)ง",
  "(ง ͡ʘ ͜ʖ ͡ʘ)ง",
  "(ง •̀_•́)ง",
  "(ง'̀-'́)ง",
  "(ง°ل͜°)ง",
  "(ง⌐□ل͜□)ง",
  "(ღ˘⌣˘ღ)",
  "(ᵔᴥᵔ)",
  "(•ω•)",
  "(•◡•)/",
  "(⊙ω⊙)",
  "(⌐■_■)",
  "(─‿‿─)",
  "(╯°□°）╯",
  "(◕‿◕)",
  "(☞ﾟ∀ﾟ)☞",
  "(❍ᴥ❍ʋ)",
  "(っ◕‿◕)っ",
  "(づ｡◕‿‿◕｡)づ",
  "(ノಠ益ಠ)ノ",
  "(ノ・∀・)ノ",
  "(；一_一)",
  "(｀◔ ω ◔´)",
  "(｡◕‿‿◕｡)",
  "(ﾉ◕ヮ◕)ﾉ",
  "*<{:¬{D}}}",
  "=^.^=",
  "t(-.-t)",
  "| (• ◡•)|",
  "~(˘▾˘~)",
  "¬_¬",
  "¯(°_o)/¯",
  "¯_(ツ)_/¯",
  "°Д°",
  "ɳ༼ຈل͜ຈ༽ɲ",
  "ʅʕ•ᴥ•ʔʃ",
  "ʕ´•ᴥ•`ʔ",
  "ʕ•ᴥ•ʔ",
  "ʕ◉.◉ʔ",
  "ʕㅇ호ㅇʔ",
  "ʕ；•`ᴥ•´ʔ",
  "ʘ‿ʘ",
  "͡° ͜ʖ ͡°",
  "ζ༼Ɵ͆ل͜Ɵ͆༽ᶘ",
  "Ѱζ༼ᴼل͜ᴼ༽ᶘѰ",
  "ب_ب",
  "٩◔̯◔۶",
  "ಠ_ಠ",
  "ಠoಠ",
  "ಠ~ಠ",
  "ಠ‿ಠ",
  "ಠ⌣ಠ",
  "ಠ╭╮ಠ",
  "ರ_ರ",
  "ง ͠° ل͜ °)ง",
  "๏̯͡๏﴿",
  "༼ ºººººل͟ººººº ༽",
  "༼ ºل͟º ༽",
  "༼ ºل͟º༼",
  "༼ ºل͟º༽",
  "༼ ͡■ل͜ ͡■༽",
  "༼ つ ◕_◕ ༽つ",
  "༼ʘ̚ل͜ʘ̚༽",
  "ლ(´ڡ`ლ)",
  "ლ(́◉◞౪◟◉‵ლ)",
  "ლ(ಠ益ಠლ)",
  "ᄽὁȍ ̪őὀᄿ",
  "ᔑ•ﺪ͟͠•ᔐ",
  "ᕕ( ᐛ )ᕗ",
  "ᕙ(⇀‸↼‶)ᕗ",
  "ᕙ༼ຈل͜ຈ༽ᕗ",
  "ᶘ ᵒᴥᵒᶅ",
  "‎‎(ﾉಥ益ಥ）ﾉ",
  "≧☉_☉≦",
  "⊙▃⊙",
  "⊙﹏⊙",
  "┌( ಠ_ಠ)┘",
  "╚(ಠ_ಠ)=┐",
  "◉_◉",
  "◔ ⌣ ◔",
  "◔̯◔",
  "◕‿↼",
  "◕‿◕",
  "☉_☉",
  "☜(⌒▽⌒)☞",
  "☼.☼",
  "♥‿♥",
  "⚆ _ ⚆",
  "✌(-‿-)✌",
  "〆(・∀・＠)",
  "ノ( º _ ºノ)",
  "ノ( ゜-゜ノ)",
  "ヽ( ͝° ͜ʖ͡°)ﾉ",
  "ヽ(`Д´)ﾉ",
  "ヽ༼° ͟ل͜ ͡°༽ﾉ",
  "ヽ༼ʘ̚ل͜ʘ̚༽ﾉ",
  "ヽ༼ຈل͜ຈ༽ง",
  "ヽ༼ຈل͜ຈ༽ﾉ",
  "ヽ༼Ὸل͜ຈ༽ﾉ",
  "ヾ(⌐■_■)ノ",
  "꒰･◡･๑꒱",
  "﴾͡๏̯͡๏﴿",
  "｡◕‿◕｡",
  "ʕノ◔ϖ◔ʔノ",
  "꒰•̥̥̥̥̥̥̥ ﹏ •̥̥̥̥̥̥̥̥๑꒱"
]

module.exports = function() {
  return faces[Math.floor(Math.random() * faces.length)]
}

module.exports.faces = faces

//module.exports.faceStream = function() {
//  return spigot(faces)
//}

},{}]},{},[1])