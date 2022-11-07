import { useEffect, useState } from "react";

function getInitialValue(key, initialValue) {
	const storedValue = localStorage.getItem(key);

	return storedValue
		? JSON.parse(storedValue)
		: typeof initialValue == "function"
		? initialValue()
		: initialValue;
}

export default function useLocalStorage(key, initialValue) {
	const [value, setValue] = useState(getInitialValue(key, initialValue));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
