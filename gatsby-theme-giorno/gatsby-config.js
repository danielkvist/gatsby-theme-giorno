const path = require('path');
require('dotenv').config({
	path: path.resolve('../.env'),
});

module.exports = {
	flags: { PRESERVE_WEBPACK_CACHE: true },
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-source-sanity',
			options: {
				// TODO: make they be received by theme options
				projectId: process.env.SANITY_PROJECT_ID,
				dataset: process.env.SANITY_DATASET_NAME,
				token: process.env.SANITY_TOKEN,
				watchMode: true,
				overlayDrafts: true,
			},
		},
	],
};
