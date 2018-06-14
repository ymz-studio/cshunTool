<template>
    <v-container>
        <v-layout column v-if="curItem">
            <h4>{{curItem.title}}</h4>
            <p>{{curItem.detail}}</p>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            item: null
        }
    },
    computed: {
        ...mapState(['curItem']),
    }
}
</script>

<style scoped>

</style>