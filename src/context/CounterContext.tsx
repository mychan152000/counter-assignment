import React, { createContext, useState, ReactNode, useContext } from "react";

export interface CounterContextType {
	count: number;
	increment: () => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [count, setCount] = useState<number>(0);

	const increment = () => setCount((prev) => prev + 1);

	return (
		<CounterContext.Provider value={{ count, increment }}>
			{children}
		</CounterContext.Provider>
	);
};
