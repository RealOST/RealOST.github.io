var pio = new Paul_Pio({
	mode: "fixed",
	hidden: true,
	content: {
	  welcome: [
		"欢迎来到博主的小宇宙！",
		"今天天气不错，一起来玩吧！",
		"博主每天都有些折腾记录，欢迎前往他的小窝阅读~",
	  ],
	  custom: [
		{
		  selector: "#post-comment",
		  text: "欢迎参与本文评论，别发小广告噢~",
		},
		{
		  selector: ".home-social a:last-child",
		  text: "在这里可以了解博主的日常噢~",
		},
		{ selector: ".post-item a", type: "read" },
		{ selector: ".post-content a, .page-content a", type: "link" },
	  ],
	},
	night: "night()",
	model: [
	  "https://realost.github.io/pio/model/416/model.json",
	],
});