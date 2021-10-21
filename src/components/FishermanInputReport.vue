<template>
    <div class="main-wrapper rounded-bottom mb-2">
        <div class="mx-auto" style="width:fit-content">
            <div class="h80">
                <h3>
                    تبييض كشف صياد
                </h3>
            </div>
        </div>
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <table class="table table-hover table-bordered text-center">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">الرقم</th>
                    <th scope="col">العدد</th>
                    <th scope="col">السعر</th>
                    <th scope="col">التاجر</th>
                    <th scope="col">ملاحظات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items"
                        :key="item.number">
                        <td scope="row"><input type="checkbox" class="form-control"></td>
                        <td>{{ item.number }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.seller }}</td>
                        <td>{{ item.notes }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row py-2 text-center text-md-right no-gutters border-bottom">
            <div class="col-md-6 col-lg-2">
                <div class="mr-2">
                    <button class="btn btn-light mb-3 mb-md-0">حذف المحدد</button>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <input type="search" class="form-control w-75 mx-auto mx-md-0" placeholder="بحث عن صياد">
            </div>
            <div class="col-md-6 col-lg-3">الرصيد المتبقي للصياد: 
                <span>0</span>
            </div>
            <div class="col-md-6 col-lg-3">
                العدد الإجمالي للبكس غير المعتمدة: 
                <span>0</span>
            </div>
            <div class="col-md-6 col-lg-1 text-left">
                <div class="ml-2">
                    <button class="btn btn-light">اعتماد</button>
                </div>
            </div>
        </div>
        <div class="mx-4 px-4">
            <div class="row py-2 text-center text-md-right no-gutters">
                <div class="col-md-6 col-lg-2">
                    <div class="form-group">
                        <label for="quantity">العدد: </label>
                        <input class="w-50 mr-4 form-control d-inline-block" type="text" id="quantity">
                    </div>
                </div>
                <div class="col-2 col-md-1 text-center">X</div>
                <div class="col-md-6 col-lg-2">
                    <div class="form-group">
                        <label for="quantity">السعر: </label>
                        <input class="w-50 mr-4 form-control d-inline-block" type="text" id="quantity">
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="form-group">
                        <label for="quantity">التاجر: </label>
                        <input class="w-75 form-control d-inline-block" type="text" id="quantity">
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <input type="text" class="w-75 form-control mx-auto mx-md-0" placeholder="ملاحظة">
                </div>
                <div class="col-md-6 col-lg-1 text-center text-md-left">
                    <div class="ml-2">
                        <button class="btn btn-light mt-3 mt-md-0">اضافة</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                items: [
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    },
                    {
                    number: 114,
                    quantity: 12,
                    price: 50,
                    seller: 'محمد',
                    notes: 'ملاحظات هنا...'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .main-wrapper{
        width: 100%;
        max-height: 90vh;
        background-color: var(--color-cyan);
    }

    div.h80{
        height: 10vh;
        display: table;
    }

    h3{
        display: table-cell;
        vertical-align: middle;
    }

    .my-custom-scrollbar {
        position: relative;
        height: 60vh;
        overflow: auto;
    }
    .table-wrapper-scroll-y {
        display: block;
        min-height: 60vh;
    }

    .table{
        background-color: white;
        scroll-behavior: smooth;
        min-height: 60vh;
    }

    thead{
        background-color: var(--color-light-grey);
    }

    td{
        padding: 3px;
    }
    tr:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 991px) {
        .main-wrapper{
            max-height: 150vh;
        }
    }
</style>