// TODO: add icon
export default {
	name: 'cta',
	title: 'CTA',
	type: 'object',
	description: 'A Call-To-Action.',
	fields: [
		{
			name: 'title',
			title: 'Title or text',
			type: 'string',
			description: 'CTA message.',
		},
		{
			name: 'url',
			title: 'URL',
			type: 'string',
			description: 'CTA target.',
		},
	],
};
