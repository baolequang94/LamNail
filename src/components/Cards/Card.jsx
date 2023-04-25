import React from "react";

const Card = ({ topImg, menu, isHighlight }) => {
	const { title, totalPrice, items } = menu;
	return (
		<div
			className={`${
				isHighlight ? "bg-gray-100" : ""
			} w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
		>
			<img className="w-20 mx-auto mt-[-3rem] bg-white" src={topImg} alt="/" />
			<h2 className="text-2xl font-bold text-center py-8">{title}</h2>
			<p className="text-center text-4xl font-bold">{totalPrice}</p>
			<ul className="text-center font-medium my-8">
				{items.map((item) => (
					<li className="py-2 border-b mx-8 flex justify-between">
						<span>{item.name}</span>
						<span>{item.price}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Card;
