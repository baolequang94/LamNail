import React, { useContext } from "react";

import SettingContext from "../context/Setting";

const Hero = () => {
	const {
		homePage: { title = "", subTitle = "" },
	} = useContext(SettingContext);

	return (
		<div className="h-screen bg-[url('./assets/homepage.jpg')] bg-cover">
			<div className="h-full w-full">
				<div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
					<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
						{title}
					</h1>
					<div className="flex justify-center items-center">
						<p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
							{subTitle}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
