import React, { useContext } from "react";

import Intro2 from "../assets/intro2.jpg";
import SettingContext from "../context/Setting";

const Analytics = () => {
	const {
		intro: { title = "", subTitle = "", content = "" },
	} = useContext(SettingContext);

	return (
		<div id="intro" className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img
					className="w-[500px] mx-auto my-4 rounded-lg"
					src={Intro2}
					alt="/"
				/>
				<div className="flex flex-col justify-center">
					<p className="text-[#EEE9DA] font-semibold text-2xl">{title}</p>
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
						{subTitle}
					</h1>
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
