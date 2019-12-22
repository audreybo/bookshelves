const deepCopy = source => {
	return JSON.parse(JSON.stringify(source));
};

const getPrice = price => {
	if (!price) {
		return null;
	}

	const { amount, currency } = price;
	const currencySymbol = currency === 'EUR' ? '€' : '$US';
	return `${(amount / 100).toFixed(2)} ${currencySymbol}`;
};

const getTitle = title => {
	return title.length > 35
		? `${title.substring(0, 35)}...`
		: title;
};

export { deepCopy, getPrice, getTitle };