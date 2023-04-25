import React, { useContext } from "react";

import Intro1 from "../assets/intro1.jpg";
import SettingContext from "../context/Setting";

const Newsletter = () => {
	const {
		intro2: { title = "", subTitle = "", content = "" },
	} = useContext(SettingContext);

	return (
		<div className="w-full py-16 text-black px-4">
			<div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 my-4">
					<p className="text-white font-semibold text-2xl">{title}</p>
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
						{subTitle}
					</h1>
					<p>{content}</p>
				</div>
				<div className="my-4">
					<img
						className="w-[500px] mx-auto my-4 rounded-lg"
						src={Intro1}
						alt="/"
					/>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
