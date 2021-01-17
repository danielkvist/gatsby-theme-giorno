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
		}
	}
`;
