import React from "react";
import Nail2 from "../assets/nail-2.jpg";

const Analytics = () => {
	return (
		<div className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img className="w-[500px] mx-auto my-4" src={Nail2} alt="/" />
				<div className="flex flex-col justify-center">
					<p className="text-[#93BFCF] font-bold ">Lorem, ipsum dolor.</p>
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
			</div>
		</div>
	);
};

export default Analytics;
