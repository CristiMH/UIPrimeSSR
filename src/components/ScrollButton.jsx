import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

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

	const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

	return (
		<div
			className={`fixed z-50 bottom-6 right-6 border-2 border-[#28b5af] rounded-full bg-[#28b5af] shadow-lg transition-opacity transition-all duration-100 ease-in ${
				visible ? "opacity-100" : "opacity-0"
			} cursor-pointer`}
			onClick={scrollToTop}
		>
			<FaArrowCircleUp className="text-4xl text-[#1E2008] hover:text-green-bg transition-all" />
		</div>
	);
};

export default ScrollButton;