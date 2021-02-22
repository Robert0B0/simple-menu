import React, { useState } from "react";

const Menu = ({ items, removeItem }) => {
	const info =
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. " +
		"Incidunt sapiente eaque impedit quo aliquid ab, iste labore";

	const [readMore, setReadMore] = useState(false);

	return (
		<div className="section-center">
			{items.map((item) => {
				const { id, title, image, category, description, price } = item;
				return (
					<article key={id} className="menu-item">
						<img src={image} alt={title} className="photo" />
						<div className="menu-info">
							<header>
								<h4>{title}</h4>
								<h4 className="price">${price}</h4>
							</header>
							<p>{info}</p>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default Menu;
