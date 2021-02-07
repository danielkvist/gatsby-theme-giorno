import { BsLink45Deg as icon } from 'react-icons/bs';

export default {
	name: 'footerSocialLinks',
	title: 'Social links',
	type: 'object',
	icon,
	fields: [
		{
			name: 'title',
			type: 'title',
		},
		{
			name: 'links',
			title: 'Social links',
			type: 'array',
			of: [
				{
					name: 'link',
					title: 'Social media link',
					type: 'object',
					icon,
					fields: [
						{
							name: 'title',
							type: 'title',
							description:
								'Social network or external site name (for example: Instagram).',
						},
						{
							name: 'url',
							title: 'URL',
							type: 'url',
							validation: (Rule) =>
								Rule.required().uri({
									scheme: ['http', 'https'],
								}),
						},
					],
					preview: {
						select: {
							title: 'title',
						},
					},
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title',
		},
	},
};
