let mix = require("laravel-mix");

mix.sass("src/scss/app.scss", "css").options({
	processCssUrls: false,
});

mix.setPublicPath("dist");
