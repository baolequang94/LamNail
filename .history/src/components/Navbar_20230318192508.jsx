import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Logo from "./Logo";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<header className="fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
			<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
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
							? "fixed left-0 top-0 w-[60%] h-full bg-[#eee9da] ease-in-out duration-500"
							: "ease-in-out duration-500 fixed left-[-100%]"
					}
				>
					<Logo className="m-4" />
					<li className="p-4 border-b border-b-gray-800 whitespace-nowrap">
						<a>Trang chủ</a>
					</li>
					<li className="p-4 border-b border-b-gray-800 whitespace-nowrap">
						<a>Giới thiệu</a>
					</li>
					<li className="p-4 border-b border-b-gray-800 whitespace-nowrap">
						<a>Bảng giá</a>
					</li>
					<li className="p-4 border-b border-b-gray-800 whitespace-nowrap">
						<a>Liên hệ</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;