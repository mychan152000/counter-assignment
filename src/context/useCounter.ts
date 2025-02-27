import { useContext } from "react";
import { CounterContext, CounterContextType } from "./CounterContext";

const useCounter = (): CounterContextType => {
	const context = useContext(CounterContext);
	if (context === undefined) {
		throw new Error("useCounter must be used within a CounterProvider");
	}
	return context;
};

export { useCounter };