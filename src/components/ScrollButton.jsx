import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisible = () => {
			setVisible(window.scrollY > 300);
		};
		window.addEventListener("scroll", toggleVisible);
		return () => window.removeEventListener("scroll", toggleVisible);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			className={`fixed z-50 bottom-24 right-6 w-10 h-10 sm:w-12 sm:h-12 border-[3px] border-[#28b5af] rounded-full bg-[#1E2008] hover:bg-gray-800 transition-all shadow-lg transition-opacity transition-all duration-100 ease-in ${
				visible ? "opacity-100" : "opacity-0"
			} cursor-pointer flex items-center justify-center`}
			onClick={scrollToTop}
		>
			<FaArrowUp className="text-2xl sm:text-3xl text-[#28b5af]" />
		</div>
	);
};

export default ScrollButton;