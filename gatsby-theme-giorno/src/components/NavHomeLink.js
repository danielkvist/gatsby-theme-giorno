import React from 'react';
import { Link } from 'gatsby';

const NavHomeLink = ({ children, clickHandler }) => {
	return (
		<Link to="/" onClick={clickHandler}>
			<h1 className="text-2xl text-text dark:text-invert-text">{children}</h1>
		</Link>
	);
};

export default NavHomeLink;
