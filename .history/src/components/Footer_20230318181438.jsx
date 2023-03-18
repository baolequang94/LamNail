import React from "react";
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";

import Logo from "./Logo";

const Footer = () => {
	return (
		<div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black">
			<div>
				<Logo />
				<p className="py-4">Lorem ipsum dolor sit amet consectetur.</p>
				<div className="flex justify-around md:w-[75%] my-6 text-[#93BFCF]">
					<FaFacebookSquare size={30} />
					<FaInstagram size={30} />
					<FaYoutubeSquare size={30} />
				</div>
			</div>
			<div className="lg:col-span-2 flex justify-between mt-6">
				<div>
					<h6 className="font-bold text-black flex items-center">
						<IoLocationSharp size={20} className="inline mr-2" />
						<span>Địa chỉ</span>
					</h6>
					<ul>
						<li className="py-2 text-sm">
							104a Nhất Chi Mai, P.13, Q.Tân Bình, TP.HCM
						</li>
					</ul>
				</div>
				<div>
					<h6 className="font-bold text-black flex items-center">
						<AiOutlineShop size={20} className="inline mr-2" />
						<span>Giờ Mở Cửa</span>
					</h6>
					<ul>
						<li className="py-2 font-semibold text-sm">Thứ 2 - Thứ 6</li>
						<li className="py-2 text-sm">8:00 - 20:00</li>
						<li className="py-2 font-semibold text-sm">Thứ 7 - Chủ Nhật</li>
						<li className="py-2 text-sm">8:00 - 21:00</li>
					</ul>
				</div>
				<div>
					<h6 className="font-semibold text-black">Company</h6>
					<ul>
						<li className="py-2 text-sm">About</li>
						<li className="py-2 text-sm">Blog</li>
						<li className="py-2 text-sm">Jobs</li>
						<li className="py-2 text-sm">Press</li>
						<li className="py-2 text-sm">Careers</li>
					</ul>
				</div>
				<div>
					<h6 className="font-semibold text-black">Legal</h6>
					<ul>
						<li className="py-2 text-sm">Claim</li>
						<li className="py-2 text-sm">Policy</li>
						<li className="py-2 text-sm">Terms</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;

// 4/2 -> 2
// 3/2 -> 1
