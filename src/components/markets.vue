<template>
    <div class="row text-center mx-0 rownded">
        <router-link v-for="market in markets" :key="market" to="/" class="col-sm-6 col-md-4 bg-light">
            <span>
                <h6>{{ market }}</h6>
            </span>
        </router-link>
        <div class="col-12 d-flex justify-content-center align-items-end">
            <router-link to="/Markets/addNewMarket" class="btn btn-primary ml-2" tag="button">
                إضافة سوق جديد
            </router-link>
            <router-link to="/" class="btn btn-primary" tag="button">
                طباعة تقرير كل الأسواق
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                markets: [
                    'فراس',
                    'جباليا',
                    'الشيخ رضوان',
                    'معسكر الشاطئ',
                    'الميناء',
                    'الحسبة',
                    'سوق حر',
                ]
            }
        }
    }
</script>

<style scoped>
    .row{
        height: 90vh;
    }
    .col-sm-6.col-md-4{
        border-radius: 5px;
    }
    .col-sm-6.col-md-4 {
        display: table;
        text-align: center;
        border: 1px solid var(--color-grey);
    }
    span {
        display: table-cell;
        vertical-align: middle;
    }
    .col-sm-6.col-md-4:hover{
        background-color: var(--color-light-grey) !important;
        cursor: pointer;
        text-decoration: none;
    }
    h6{
        color: black;
    }
    @media screen and (max-width: 991px) {
        .row{
            height: 120vh;
        }
    }
    @media screen and (max-width: 750px) {
        .row{
            height: 140vh;
        }
    }
    @media screen and (max-width: 575px) {
        .row{
            height: 250vh;
        }
    }
</style>