<template>
    <div class="main-wrapper rounded-bottom">
        <div class="mx-auto" style="width:fit-content">
            <div class="h80">
                <div class="middle">
                    <div class="row justify-content-center align-items-center">
                        <button class="btn btn-light">تعديل التفاصيل</button>
                        <h1 class="mx-5">
                            جميع القيود
                        </h1>
                        <h6>الرصيد:
                            <span>100</span>
                            <span>بكسة</span>
                        </h6>
                        <button class="btn btn-light mr-5">إضافة بكس من المخزن</button>
                    </div>
                </div>
            </div>
        </div>

        <hr color="white" class="my-0">

        <div class="row py-2 text-center text-md-right align-items-center">
            <div class="col-md-6 col-lg-4">
                <div class="mr-2">
                    <button class="btn btn-light mb-3 mb-md-0">حذف المحدد</button>
                    <button class="btn btn-light mb-3 mb-md-0">تقرير يومي للمعروض</button>
                </div>
            </div>
            <div class="col-md-6 col-lg-5 font-weight-bold">
                تاريخ الإنشاء: 
                <div class="row">
                    <div class="col-6">
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-6">
                        <input type="date" class="form-control">
                    </div>
                </div>
                تاريخ التعديل: 
                <div class="row">
                    <div class="col-6">
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-6">
                        <input type="date" class="form-control">
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 text-center text-md-right text-lg-left">
                <div class="ml-2">
                    <button class="btn btn-light">نوع القيد</button>
                    <button class="btn btn-light">حالات خاصة للبكس</button>
                </div>
            </div>
        </div>

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

        <div style="height:15px"></div>
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
        background-color: var(--color-caprice-yellow);
    }

    div.h80{
        height: 10vh;
        display: table;
    }

    .middle{
        display: table-cell;
        vertical-align: middle;
    }

    .table{
        background-color: white;
        scroll-behavior: smooth;
        min-height: 55vh;
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

    .rounded-bottom{
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
</style>