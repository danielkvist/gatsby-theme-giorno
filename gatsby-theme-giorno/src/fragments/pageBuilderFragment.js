import { graphql } from 'gatsby';

export const query = graphql`
	fragment PageBuilder on SanityPage {
		pageBuilder {
			... on SanityHero {
				_key
				_type
				cta {
					title
					url
					_type
				}
				image {
					_type
					asset {
						fixed {
							...GatsbySanityImageFixed
						}
						fluid {
							...GatsbySanityImageFluid
						}
						title
						url
					}
				}
				subtitle
				title
			}
			... on SanityTextSection {
				_key
				_type
				description
				title
				_rawContent
				content {
					children {
						_key
						_type
						marks
						text
					}
					_key
					_type
					list
					style
				}
			}
			... on SanityGridSection {
				_key
				_type
				_rawInternalLink
				_rawItems
				title
				description
				internalLink {
					_key
					_type
					href
					title
				}
				items {
					_key
					_type
					content
					title
				}
			}
			... on SanityForm {
				_key
				_type
				_rawInputs
				name
				title
				inputs {
					... on SanityInput {
						_key
						_type
						label
						name
						placeholder
						required
						type
					}
					... on SanityTextarea {
						_key
						_type
						label
						maxLength
						minLength
						name
						placeholder
						required
					}
					... on SanitySubmit {
						_key
						_type
						text
					}
				}
			}
		}
	}
`;
