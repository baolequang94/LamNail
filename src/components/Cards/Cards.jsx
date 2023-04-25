import React, { useContext } from "react";

import Card from "./Card";
import Single from "../../assets/single.png";
// import Double from "../../assets/double.png";
// import Triple from "../../assets/triple.png";
import SettingContext from "../../context/Setting";

const Cards = () => {
	const { menu1, menu2, menu3 } = useContext(SettingContext);

	return (
		<div id="menu" className="w-full py-[10rem] px-4 bg-white">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
				<Card topImg={Single} menu={menu1} />
				<Card topImg={Single} menu={menu2} isHighlight />
				<Card topImg={Single} menu={menu3} />
			</div>
		</div>
	);
};

export default Cards;
