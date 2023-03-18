import React from "react";
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare } from "react-icons/fa";

import Logo from "./Logo";

const Footer = () => {
	return (
		<div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white">
			<div>
				<Logo />
				<p className="py-4">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
					ullam iste repellat consequatur libero reiciendis, blanditiis
					accusantium.
				</p>
				<div className="flex justify-around md:w-[75%] my-6">
					<FaFacebookSquare size={30} />
					<FaInstagram size={30} />
					<FaYoutubeSquare size={30} />
				</div>
			</div>
			<div className="lg:col-span-2 flex justify-between mt-6">
				<div>
					<h6 className="font-medium text-gray-400">Solutions</h6>
					<ul>
						<li className="py-2 text-sm">Analytics</li>
						<li className="py-2 text-sm">Marketing</li>
						<li className="py-2 text-sm">Commerce</li>
						<li className="py-2 text-sm">Insights</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Support</h6>
					<ul>
						<li className="py-2 text-sm">Pricing</li>
						<li className="py-2 text-sm">Documentation</li>
						<li className="py-2 text-sm">Guides</li>
						<li className="py-2 text-sm">API Status</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Company</h6>
					<ul>
						<li className="py-2 text-sm">About</li>
						<li className="py-2 text-sm">Blog</li>
						<li className="py-2 text-sm">Jobs</li>
						<li className="py-2 text-sm">Press</li>
						<li className="py-2 text-sm">Careers</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-gray-400">Legal</h6>
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
