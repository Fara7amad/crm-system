export function jsonReviver(key, value) {
	if (
		"string" === typeof value &&
		/^\d{4}-[01]\d-[0-3]\dT[012]\d(?::[0-6]\d){2}\.\d{3}Z|\d{2}-\w{3}-\d{2}$/.test(
			value
		)
	) {
		var date = new Date(value);
		if (+date === +date) {
			return date;
		}
	}

	if ("string" === typeof value && /^\d+$/g.test(value)) {
		const num = Number(value);
		return num;
	}

	return value;
}
