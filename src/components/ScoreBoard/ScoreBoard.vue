<template>
    <div class="scorelist-wrapper">
        <ul>
            <li v-for="p in scoreList" :key="p.id">
                <span>{{p.name}}</span>
                <span>{{p.score}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import store from '../../store/index'
export default {
    data(){
        return{
            scoreList: []
        }
    },
    created(){
        this.scoreList = this.$store.state.previousScore;
    }
}
</script>

<style lang="scss">
    ul{
        list-style: none;
        padding: 10px;
    }
</style>