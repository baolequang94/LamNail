import React from "react";

import Nail2 from "../assets/nail-2.jpg";

const Newsletter = () => {
	return (
		<div className="w-full py-16 text-white px-4">
			<div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 my-4">
					<p className="text-[#EEE9DA] font-semibold text-2xl">
						Lorem, ipsum dolor.
					</p>
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
						Lorem ipsum dolor sit.
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						molestiae delectus culpa hic assumenda, voluptate reprehenderit
						dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
						eveniet ex deserunt fuga?
					</p>
				</div>
				<div className="my-4">
					{/* <div className="flex flex-col sm:flex-row items-center justify-between w-full">
						<input
							className="p-3 flex w-full rounded-md text-black"
							type="email"
							placeholder="Enter Email"
						/>
						<button className="bg-[#93BFCF] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
							Notify Me
						</button>
					</div>
					<p>
						We care bout the protection of your data. Read our{" "}
						<span className="text-[#93BFCF]">Privacy Policy.</span>
					</p> */}
					<img
						className="w-[500px] mx-auto my-4 rounded-lg"
						src={Nail2}
						alt="/"
					/>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
