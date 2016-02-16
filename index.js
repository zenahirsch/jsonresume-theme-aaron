var fs = require("fs");
var Handlebars = require("handlebars");

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
    var js = fs.readFileSync(__dirname + "/js/resume.js", "utf-8");

	return Handlebars.compile(tpl)({
		css: css, 
		resume: resume,
        js: js
	});    
}

module.exports = {
	render: render
};
