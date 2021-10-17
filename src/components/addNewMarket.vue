<template>
    <div class="row text-center mx-0 rownded">
        <div class="col-12 d-flex justify-content-center align-items-center">
            <form>
                <div class="form-group">
                    <label for="market-name" class="font-weight-bold">اسم السوق:</label>
                    <input type="text" class="form-control d-inline" id="market-name">
                </div>
            </form>
        </div>
        <div class="col-12 d-flex justify-content-center align-items-end">
            <router-link to="/Markets" class="btn btn-primary ml-2 px-5 mb-3" tag="button">
                إضافة سوق
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
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