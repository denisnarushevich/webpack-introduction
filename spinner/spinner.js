require('./spinner.less');

function Spinner(){
    var spinner = document.createElement('div');
    spinner.className = 'three-quarters-loader';
    this.el = spinner;
}

Spinner.prototype.show = function(){
    this.el.style.display = 'inline-block';
};

Spinner.prototype.hide = function(){
    this.el.style.display = 'none';
};

module.exports = Spinner;