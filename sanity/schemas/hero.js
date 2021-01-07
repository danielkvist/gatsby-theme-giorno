export default {
	name: 'hero',
	title: 'Hero',
	type: 'object',
	description:
		'Adds a full-width oversized banner at the top of the page with a title.',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description:
				'Text title for the hero, this text will be displayed over the chosen image.',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
			description:
				'Subtitle for the hero, this text will be displayed under the title.',
		},
		{
			name: 'cta',
			title: 'CTA',
			type: 'object',
			description:
				"Optional CTA that will be rendered as a button under the hero's title.",
			fields: [
				{
					name: 'title',
					title: 'Message',
					type: 'string',
					description: 'CTA message.',
				},
				{
					name: 'url',
					title: 'URL',
					type: 'string',
					description: 'CTA action.',
				},
			],
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
			cta: 'cta',
		},
		prepare(selection) {
			const { title, media, cta } = selection;
			console.log(cta);
			return {
				title: `Hero ${cta?.title ? 'with CTA' : ''}`,
				subtitle: title,
				media,
			};
		},
	},
};
