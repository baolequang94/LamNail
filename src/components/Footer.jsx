import React, { useContext } from "react";
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";

import Map from "./Map";
import Logo from "./Logo";
import SettingContext from "../context/Setting";

const Footer = () => {
	const {
		footer: { slogan = "" },
	} = useContext(SettingContext);

	return (
		<div
			id="footer"
			className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-4 gap-8 text-black"
		>
			<div>
				<div className="lg:text-left text-center">
					<Logo className="inline mr-4" />
					<span className="py-4 font-bold">Nail & Eyelash</span>
				</div>
				<p className="py-4 lg:text-left text-center">{slogan}</p>
				{/* <div className="flex justify-around md:w-[75%] my-6 lg:mx-0 mx-auto text-[#93BFCF]">
					<FaFacebookSquare size={30} />
					<FaInstagram size={30} />
					<FaYoutubeSquare size={30} />
				</div> */}
			</div>
			<div className="lg:col-span-3 flex lg:flex-row flex-col justify-between mt-6">
				<div className="mb-6">
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
				<div className="mb-6">
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
				<div className="mb-6">
					<Map height={300} width={400} />
				</div>
			</div>
		</div>
	);
};

export default Footer;

// 4/2 -> 2
// 3/2 -> 1
