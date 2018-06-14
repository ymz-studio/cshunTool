// 按照某个属性分组
function groupBy(list, keyGetter) {
	let map = {};
	list.forEach((item) => {
		const key = keyGetter(item);
		const collection = map[key];
		if (!collection) {
			map[key] = [ item ];
		} else {
			collection.push(item);
		}
	});
	return map;
}

export { groupBy };
