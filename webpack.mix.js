let mix = require("laravel-mix");

mix.sass("src/scss/app.scss", "css").options({
	processCssUrls: false,
});

mix.js("src/js/app.js", "js");
mix.setPublicPath("dist");
