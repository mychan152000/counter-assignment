import { useCounter } from "../context/useCounter";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { FC } from "react";

const Counter: FC = () => {
	const { count, increment } = useCounter();
	const toast = useToast();

	const handleIncrement = () => {
		increment();
		toast({
			title: "Incremented",
			description: `Counter is now ${count + 1}`,
			status: "success",
			duration: 3000,
			isClosable: true,
			position: window.innerWidth < 640 ? "bottom" : "top-right",
			render: () => (
				<div
					className="flex items-center space-x-4 p-4 rounded-lg text-white max-w-xs mx-auto border-2"
					style={{
						background: "radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116,200,152,0.15) 0%, rgba(116,200,152,0.03) 100%), #46474F",
						borderImageSource:
							"linear-gradient(0deg, #6F7076, #6F7076), radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%)",
						borderImageSlice: "1",
					}}
				>
					<div className="text-[#74c898]">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
						</svg>

					</div>
					<div>
						<p className="font-bold text-lg">Incremented</p>
						<p>Counter is now {count + 1}</p>
					</div>
				</div>
			),
		});
	};


	return (
		<div className="flex items-center justify-center space-x-4 p-4">
			<p className="text-lg font-semibold !mr-4">Current count {count}</p>
			<button
				className="!px-4 !py-2 !bg-gray-200 text-black rounded-lg shadow-md transition-all duration-200 !hover:bg-gray-300"
				onClick={handleIncrement}
			>
				+1
			</button>


		</div>
	);
};

export default Counter;
