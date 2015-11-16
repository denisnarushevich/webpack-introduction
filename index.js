require('./less/style.less');
var Spinner = require('./spinner/spinner');

var spinner = new Spinner();

document.body.appendChild(spinner.el);

require(['./airhorn/airhorn.js'], function(Airhorn){
    var airhorn = new Airhorn();
    document.body.appendChild(airhorn.el);
    spinner.hide();
});


