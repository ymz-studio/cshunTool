import db from '../plugins/nedb';

export const state = () => ({
	// 当前选择的图例
	curItem: null,
	// 当前的背景图
	curSrc: null,
	// 记录当前拖动的图例
	onDragItem: null,
});

export const mutations = {
	chooseItem(state, item) {
		state.curItem = item;
	},
	chooseSrc(state, src) {
		state.curSrc = src;
	},
	dragItem(state, item) {
		state.onDragItem = item;
	}
};
