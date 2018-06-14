<template>
	<v-app>
		<v-toolbar app dark height="48px" color="primary">
			<v-spacer></v-spacer>
			<v-btn flat @click="openFile">
				<v-layout align-center>
					<v-icon>folder_open</v-icon>
					<span class="ml-2">打开</span>
				</v-layout>
			</v-btn>
			<v-btn flat>
				<v-layout align-center>
					<v-icon>photo_library</v-icon>
					<span class="ml-2">导出图片</span>
				</v-layout>
			</v-btn>
		</v-toolbar>
		<v-navigation-drawer floating app permanent dark fixed class="pl-0" style="background-color:#21252b;color:#cccccc;">
			<v-subheader>图例管理器</v-subheader>
			<side-panel></side-panel>
		</v-navigation-drawer>
		<v-content style="background-color:#282c34">
			<nuxt></nuxt>
		</v-content>
		<v-footer app inset style="height:30vh;border-top:#3c4049 1px solid;background-color:#282c34" dark>
			<v-layout column style="height:100%" class="pt-1">
				<v-toolbar height="30px" flat style="background-color:#282c34">
					<v-subheader>详情</v-subheader>
					<v-spacer></v-spacer>
					<v-icon style="font-size:1em">clear</v-icon>
				</v-toolbar>
				<myfooter></myfooter>
			</v-layout>
		</v-footer>
	</v-app>
</template>

<script>
import sidePanel from '../components/side-panel'
import Myfooter from '../components/footer'
import { mapState, mapMutations, mapActions } from 'vuex';
const { dialog } = require('electron').remote
const fs = require('fs')

export default {
	components: { sidePanel, Myfooter },
	computed: {
		...mapState(['curSrc']),
	},
	methods: {
		...mapMutations(['chooseSrc']),
		openFile() {
			dialog.showOpenDialog({
				title: '选择图片',
				properties: ['openFile'],
				filters: [{ name: '图片', extensions: ['jpg', 'png', 'svg', 'jpeg'] }]
			}, (e) => {
				if (e) {
					const buffer = fs.readFileSync(e[0])
					this.chooseSrc('data:image/jpg;base64,' + buffer.toString('base64'))
				}
			})
		}
	},
}
</script>
