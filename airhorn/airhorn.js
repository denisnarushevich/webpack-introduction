require('./airhorn.less');
var sound = require('file!./airhorn.mp3');

function Airhorn(){
    var $button = document.createElement('div');
    $button.className = 'button';
    $button.textContent = 'PUSH!';
    $button.addEventListener('click', this.play.bind(this));
    this._audio = new Audio(sound);
    this.el = $button;
}

Airhorn.prototype.play = function(){
    this._audio.play();
};

module.exports = Airhorn;
