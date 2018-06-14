<template>
	<div class="con">
		<div style="position: relative;">
			<img v-if="curSrc" :src="curSrc" class="src-img">
			<div id="canvas" :class="{effect}" @dragenter="onDragEnter" @dragleave="onDragLeave" @dragover.prevent="onDropOver" @drop="onDrop">
				<item-list v-model="itemList" style="height:100%;width:100%"></item-list>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import itemList from '../components/itemList'
export default {
	components: { itemList },
	data() {
		return {
			// 是否显示拖入特效
			effect: false,
			// 在画布上的所有图例
			itemList: {}
		}
	},
	computed: {
		...mapState(['curSrc', 'onDragItem'])
	},
	methods: {
		onDragEnter(e) {
			this.effect = this.onDragItem ? true : false

		},
		onDragLeave(e) {
			if (this.effect && this.onDragItem) {
				this.effect = false
			}
		},
		onDropOver() {
			// 阻止默认行为 不然不触发drop
		},
		onDrop({ offsetX, offsetY }) {
			// 拖拽元素合法
			if (this.onDragItem) {
				let target = document.getElementById('canvas')
				this.itemList[this.onDragItem._id] = {
					...this.onDragItem,
					offsetX: offsetX * 100 / target.offsetWidth,
					offsetY: offsetY * 100 / target.offsetHeight
				}
				// 触发更新
				this.itemList = { ...this.itemList }
				this.effect = false
			}
		}
	},
}
</script>

<style lang="stylus" scoped>
.con {
	max-height: calc(70vh - 48px);
	height: 100%;
	width: 100%;
	overflow: scroll;
}

.src-img {
	width: 100%;
	height: auto;
	z-index: -1;
}

#canvas {
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
}

.effect {
	background-color: rgba(255, 255, 255, 0.3);
	transition-duration: 0.3s;
}
</style>