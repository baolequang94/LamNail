import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
	return (
		<div className="w-full py-[10rem] px-4 bg-white">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
				<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] bg-white"
						src={Single}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">Gói Cơ Bản</h2>
					<p className="text-center text-4xl font-bold">$149</p>
					<ul className="text-center font-medium">
						<li className="py-2 border-b mx-8 mt-8 flex justify-between">
							<span>Hủy diệt nail</span>
							<span>399.000</span>
						</li>
						<li className="py-2 border-b mx-8 flex justify-between">
							<span>Hủy diệt nail</span>
							<span>499.000</span>
						</li>
						<li className="py-2 border-b mx-8 flex justify-between">
							<span>Hủy diệt nail</span>
							<span>599.000</span>
						</li>
					</ul>
					<button className="bg-[#93BFCF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
						Start Trial
					</button>
				</div>
				<div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
					<img
						className="w-20 mx-auto mt-[-3rem] bg-transparent"
						src={Double}
						alt="/"
					/>
					<h2 className="text-2xl font-bold text-center py-8">Gói xa xỉ</h2>
					<p className="text-center text-4xl font-bold">$149</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
						<p className="py-2 border-b mx-8">1 Granted User</p>
						<p className="py-2 border-b mx-8">Send up to 2 GB</p>
					</div>
					<button className="bg-black text-[#93BFCF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
						Start Trial
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
