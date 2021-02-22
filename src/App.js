import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import todays_menu from "./today-menu";
import tomorrows_menu from "./tomorrow-menu";

let today = false;
let presentItems = todays_menu;
console.log(today);

const AllCategories = [
	"all",
	...new Set(presentItems.map((item) => item.category)),
];

function App() {
	const [menuItems, setMenuItems] = useState(presentItems);
	const [categories, setCategories] = useState(AllCategories);

	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(presentItems);
			return;
		}
		const newItems = presentItems.filter((item) => item.category === category);
		setMenuItems(newItems);
	};
	console.log(today);

	return (
		<section className="menu section">
			<div className="title">
				<h2>Today's Menu</h2>
				<div className="underline"></div>
			</div>
			<Categories categories={categories} filterItems={filterItems} />
			<Menu items={menuItems} />
		</section>
	);
}

export default App;
