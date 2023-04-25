import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-scroll";

import Logo from "./Logo";

const LinkS = ({ to, label, onClick }) => (
	<Link
		to={to}
		spy={true}
		smooth={true}
		offset={-70}
		duration={500}
		className="cursor-pointer"
		onClick={onClick}
	>
		{label}
	</Link>
);

const Navbar = () => {
	const [isOpenNav, setIsOpenNav] = useState(false);

	const toggleNav = () => setIsOpenNav((prev) => !prev);

	return (
		<header className="fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
			<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
				<Logo />
				<ul className="hidden md:flex">
					<li className="p-4 whitespace-nowrap">
						<LinkS to="root" label="Trang chủ" />
					</li>
					<li className="p-4 whitespace-nowrap">
						<LinkS to="intro" label="Giới thiệu" />
					</li>
					<li className="p-4 whitespace-nowrap">
						<LinkS to="menu" label="Bảng giá" />
					</li>
					<li className="p-4 whitespace-nowrap">
						<LinkS to="footer" label="Liên hệ" />
					</li>
				</ul>
				<div onClick={toggleNav} className="block md:hidden">
					<AiOutlineMenu size={20} />
				</div>
				<ul
					className={
						isOpenNav
							? "fixed left-0 top-0 w-full h-full bg-[#eee9da] ease-in-out duration-500"
							: "ease-in-out duration-300 fixed left-[-100%]"
					}
				>
					<div className="flex items-center justify-between">
						<Logo className="m-4" />
						<AiOutlineClose size={20} className="mr-4" onClick={toggleNav} />
					</div>
					<li className="p-4 border-b border-b-gray-800 whitespace-nowrap">
						<LinkS to="root" label="Trang chủ" onClick={toggleNav} />
					</li>
					<li className="p-4 border-b border-b-gray-800 whitespace-nowrap">
						<LinkS to="root" label="Giới thiệu" onClick={toggleNav} />
					</li>
					<li className="p-4 border-b border-b-gray-800 whitespace-nowrap">
						<LinkS to="menu" label="Bảng giá" onClick={toggleNav} />
					</li>
					<li className="p-4 border-b border-b-gray-800 whitespace-nowrap">
						<LinkS to="footer" label="Liên hệ" onClick={toggleNav} />
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
