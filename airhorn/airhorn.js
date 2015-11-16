require('./airhorn.less');
var sound = require('file!./airhorn.mp3');
var sound2 = require('file!./airhorn2.mp3');

function Airhorn(){
    var $button = document.createElement('div');
    $button.className = 'button';
    $button.textContent = 'PUSH!';
    $button.addEventListener('click', this.play.bind(this));
    this._audio = new Audio(sound);
    this._audio2 = new Audio(sound2);
    this.el = $button;
}

Airhorn.prototype.play = function(){
    this._audio.play();
    this._audio2.play();
};

module.exports = Airhorn;
