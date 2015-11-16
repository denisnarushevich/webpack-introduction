webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10);
	var sound = __webpack_require__(12);
	var sound2 = __webpack_require__(13);

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


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./airhorn.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./airhorn.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".button {\n  height: 200px;\n  width: 200px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin: -100px 0 0 -100px;\n  border-radius: 100px;\n  border: 3px solid #ff4400;\n  background-color: red;\n  box-shadow: #777 4px 4px 0;\n  cursor: pointer;\n  text-align: center;\n  line-height: 200px;\n  white-space: nowrap;\n  color: #fff;\n  font-size: 40px;\n  font-family: Arial;\n  font-weight: bold;\n  transition: 0.1s;\n}\n.button:active {\n  box-shadow: #666 2px 2px 0;\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "958974918b3b46a92a98f660da82b0ed.mp3"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "958974918b3b46a92a98f660da82b0ed.mp3"

/***/ }
]);