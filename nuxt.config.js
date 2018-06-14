module.exports = {
	mode: 'spa',
	head: { title: '“助顺邮我”长顺县扶贫可视化数据库' }, // Headers of the page
	loading: false, // Disable default loading bar
	build: {
		extend(config, { isDev, isClient }) {
			// Extend only webpack config for client-bundle
			if (isClient) {
				config.target = 'electron-renderer';
			}
		}
	},
	plugins: [ '@/plugins/vuetify','@plugins/nedb.js' ],
	dev: process.env.NODE_ENV === 'DEV',
	css: [ '@/assets/css/global.css' ]
};
