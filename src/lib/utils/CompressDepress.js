export function compress(node, { duration = 300, delay = 0 } = {}){
	return {
		duration,
		delay,
		css: (t) => `
				transform: scaleY(${t});
				transform-origin: top;
			`
	};
}

export function depress(node, { duration = 300, delay = 0 } = {}){
	return {
		duration,
		delay,
		css: (t) => `
				transform: scaleY(${t});
				transform-origin: bottom;
			`
	};
}