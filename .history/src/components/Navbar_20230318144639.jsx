import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Logo = ({ className }) => (
	<h1 className={`w-full text-3xl font-bold text-[#FF9494] ${className}`}>
		Lam.
	</h1>
);
const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
			<Logo />
			<ul className="hidden md:flex">
				<li className="p-4 whitespace-nowrap">
					<a>Trang chủ</a>
				</li>
				<li className="p-4 whitespace-nowrap">
					<a>Giới thiệu</a>
				</li>
				<li className="p-4 whitespace-nowrap">
					<a>Bảng giá</a>
				</li>
				<li className="p-4 whitespace-nowrap">
					<a>Liên hệ</a>
				</li>
			</ul>
			<div onClick={handleNav} className="block md:hidden">
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<ul
				className={
					nav
						? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
						: "ease-in-out duration-500 fixed left-[-100%]"
				}
			>
				<Logo className="m-4" />
				<li className="p-4 border-b border-gray-600">Home</li>
				<li className="p-4 border-b border-gray-600">Company</li>
				<li className="p-4 border-b border-gray-600">Resources</li>
				<li className="p-4 border-b border-gray-600">About</li>
				<li className="p-4">Contact</li>
			</ul>
		</div>
	);
};

export default Navbar;
