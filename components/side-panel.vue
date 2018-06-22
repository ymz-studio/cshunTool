<template>
    <div class="panel">
        <v-expansion-panel expand>
            <v-expansion-panel-content v-for="(items,key) in list" :key="key" :value="true">
                <span slot="header" style="font-size:0.9em">{{key}}</span>
                <v-list style="font-size:0.8em" subheader>
                    <v-list-tile draggable inactive v-for="item in items" :class="{active:curItem&&curItem._id===item._id,tile:curItem&&curItem._id!==item._id}" :key="item._id" @click="chooseItem(item)" @dragstart="dragStart(item,$event)" @dragend="dragEnd">
                        <v-list-tile-action class="side-action">
                            <img :src="item.src">
                            <span>{{item.number}}</span>
                        </v-list-tile-action>
                        <v-list-tile-content>{{item.title}}</v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from "vuex";
export default {
    computed: {
        ...mapState(['curItem'])
    },
    data() {
        return {
            list: {},
        }
    },
    methods: {
        ...mapMutations(['chooseItem', 'dragItem']),
        onDragItem(item) {
            this.chooseItem(id)
        },
        // 获取全部图例
        async getList() {
            const data = await this.$db.find({});
            const groupBy = require('../plugins/utils.js').groupBy
            const grouped = groupBy(data, item => item.group)
            console.log(grouped);
            return grouped
        },
        // 拖动显示图例
        dragStart(item, e) {
            let img = document.createElement("img");
            img.src = item.src
            img.width = '70px'
            img.height = '50px'
            e.dataTransfer.setDragImage(img, 0, 0)
            this.dragItem(item)
        },
        dragEnd(e) {
            this.dragItem(null)
        }
    },
    computed: {
        ...mapState(['curItem'])
    },
    async mounted() {
        this.list = await this.getList()
    }
}
</script>

<style lang="stylus" scoped>
.panel >>> .expansion-panel__header {
    background-color: #333842;
}

.panel >>> .expansion-panel__body {
    background-color: #21252b;
}

.theme--dark .expansion-panel .expansion-panel__container, .application .theme--dark.expansion-panel .expansion-panel__container {
    border: 0;
}

.tile:hover {
    background-color: #262a31;
}

.active {
    background-color: #2c313a;
}

.side-action {
    position: relative;
    color: #ffffff;

    img {
        height: 100%;
        width: auto;
        padding-right: 1em;
    }

    span {
        position: absolute;
        top: 50%;
        left: calc(50% - 0.5em);
        transform: translate(-50%, -50%);
        color: black;
    }
}
</style>