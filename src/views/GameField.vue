<template>
<div class="page-wrapper">
    <div class="play-field">

        <div v-for="e in evenPlayingField.rows" :key="e" class="parts row">
            <div class="column-wrapper">
                <button @click="getResult($event); hander($event);" v-for="z in evenPlayingField.columns" :key="z " class="parts columns">
                </button>
            </div>
        </div>
    </div>
        <div v-if="showModal" class="game-ends">
            <div class="inner-card">
            <h2 class="title">Game Over</h2>
            <div class="end-center">
                <p>Your Score</p>
                <p>{{points}}</p>
            </div>
            <div class="btn-group">
                <button @click="showModal =! showModal">Try Again</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from '../store/index';
    export default {
        data() {
            return {
                showModal : false,
                evenPlayingField: {
                    rows: [1, 2, 3, 4, 5],
                    columns: [1, 2, 3, 4, 5]
                },
                points: 0,
            }
        },
        methods: {
            getResult(event) {
                event.target.disabled = true;
                let rnd = Math.random();
                console.log(rnd)
                if (rnd < 0.8) {
                    event.target.classList += " success";
                    this.points += 50;
                } else {
                    event.target.classList += " failed";
                    this.show();
                }
            },
            show(){
                this.showModal = true;
            },
            hander(event){
                this.$emit('clicked', this.points);
            }
        },
        props:{
            newData:{
                type: Object
            }
        },
    }
</script>

<style lang="scss" scoped>
    .play-field {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .parts {
        background-color: #474747;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin: 5px;

        &.row {
            background-color: transparent;
            margin-top: 50px;
        }

        .columns.success {
            background-color: green;
            position: relative;

            &::after {
                content: ' \2713 ';
                position: absolute;
                top: 50%;
                background-color: green;
                color: white;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .columns.failed {
            background-color: red;
            position: relative;

            &::after {
                content: url('../assets/Subtract.png');
                background-size: cover;
                position: absolute;
                top: 50%;
                color: white;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }

    .play-field {
        display: flex;
    }

    .game-ends{
        position: absolute;
        z-index: 99;
        background-color: rgba(0,0,0,0.2);
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        display :flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .inner-card{
            background-color: white;
            display: flex;
            border-radius: 8px;
            flex-flow: column;
            justify-content: space-between;

            h2{
                margin-top: 0;
                background-color: green;
                color: white;
                padding: 10px;
                border-top-right-radius: 8px;
                border-top-left-radius: 8px;
            }
        }
    }
</style>