<template>
    <div>
        <div v-for="(item,_id) in items" :key="_id" @click="chooseItem(item)" :style="`position:absolute;left:${item.offsetX}%;top:${item.offsetY}%`">
            <div :draggable="true" @dragstart="onDrag(item,$event)" style="position:relative">
                <img :id="item._id" :src="item.src">
                <span class="number">{{item.number}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: ['value'],
    computed: {
        items: {
            get() {
                return this.value
            },
            set(newValue) {
                this.$emit('input', newValue)
            }

        }
    },
    methods: {
        ...mapMutations(['chooseItem', 'dragItem']),
        onDrag(item, e) {
            let img = document.getElementById(item._id);
            e.dataTransfer.setDragImage(img, 0, 0)
            this.dragItem(item)
        }
    },
    onDragOver() {

    }
}


</script>

<style scoped>
img{
    cursor: pointer;
}
.number{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 1.5em;
}
</style>