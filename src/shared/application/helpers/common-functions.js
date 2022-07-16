

export const numberWithDots = (x) => {
	if (x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	}
	return x !== 0 ? '' : '0';
};
export const replaceString = (value, replace, replaced) => {
	return value.toString().split(`${replace}`).join(replaced);
};


export const currencyCopFormat = (number) => {
	number = replaceString(number, '$', '');
	const NUMERIC_REGEXP = /^[.0-9]*$/;
	const lastValue = number.substring(0, number.length - 1);
	let regexValue = '';

	if (number.match(NUMERIC_REGEXP)) {
		regexValue = number.match(NUMERIC_REGEXP);
	} else {
		regexValue = lastValue.match(NUMERIC_REGEXP);
	}
	const standarNumber = replaceString(regexValue, '.', '');
	const options2 = { style: 'decimal', maximumSignificantDigits: 3 };
	const numberFormat2 = new Intl.NumberFormat('en-US', options2);
	const formatCopNumber = numberFormat2.format(standarNumber);

	return `$${replaceString(formatCopNumber, ',', '.')}`;
};

export const removeCopFormat = (number) => {
	number = replaceString(number, '$', '');
	return replaceString(number, '.', '');
};

export const formatCurrency = (value) => (value ? `$ ${numberWithDots(value)}` : `$ `);

export const formatMillions = (value) =>
	value ? `$ ${numberWithDots(value.toString().replace(/\B(?=(\d{6})+(?!\d))/g, '’'))}` : '$ 0';

export const removeCharactersToFormatCurrency = (value) =>
	value
		.toString()
		.replace(/^[0-9]/, '')
		.replace(/\s/g, '')
		.replace(/[^\w\s]/gi, '');

export const importResource = (options) => {
	const firstScript = document.getElementsByTagName('script')[0];
	if (options.id && document.getElementById(options.id)) return;
	if (options.style) {
		const style = document.createElement('link');
		style.id = options.id;
		style.rel = 'stylesheet';
		style.href = options.style;
		style.async = !!options.async;
		if (firstScript) {
			firstScript.parentNode.insertBefore(style, firstScript);
		} else {
			document.querySelector('head').appendChild(style);
		}
	} else {
		const script = document.createElement('script');
		script.src = options.script;
		script.id = options.id;
		script.type = 'text/javascript';
		script.defer = true;
		script.async = !!options.async;
		if (firstScript) {
			firstScript.parentNode.insertBefore(script, firstScript);
		} else {
			document.querySelector('head').appendChild(script);
		}
	}
};

export const getErrorMessage = (field = '', errors = {}) => errors[field]?.message;

export const isEmptyObject = (obj = {}) => Object.keys(obj).length === 0;

export const removeEmptyFields = (obj = {}) => {
	return Object.fromEntries(
		Object.entries(obj).filter(([key, value]) => {
			return typeof value !== 'boolean' ? !!value : true;
		}),
	);
};

export const formatName = (name) => (name.length > 0 ? `${name},` : '');


export const debounce = (func, wait) => {
	let timeout;
  
	return function executedFunction(...args) {
	  const later = () => {
		clearTimeout(timeout);
		func(...args);
	  };
  
	  clearTimeout(timeout);
	  timeout = setTimeout(later, wait);
	};
  };