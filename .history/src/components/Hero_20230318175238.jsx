import React from "react";

const Hero = () => {
	return (
		<div className="h-screen bg-[url('./assets/nail-2.jpg')] bg-cover">
			<div className="h-full w-full backdrop-blur-sm">
				<div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
					<p className="text-[#93BFCF] font-bold p-2">
						Lorem ipsum dolor sit amet.
					</p>
					<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
						Lorem, ipsum.
					</h1>
					<div className="flex justify-center items-center">
						<p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
					<p className="md:text-2xl text-xl font-bold text-[#EEE9DA]">
						Monitor your data analytics to increase revenue for BTB, BTC, & SASS
						platforms.
					</p>
					<button className="bg-cyan-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
						<a href="tel:+84931808816">Đặt Lịch Hẹn</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
