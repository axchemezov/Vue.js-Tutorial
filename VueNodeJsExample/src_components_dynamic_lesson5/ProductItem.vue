<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{{index}} {{product.title}}</h4>
            <p class="card-text">{{product.qt}} items for ${{product.price}}</p>
            <a href="#" class="btn btn-primary"
            @click="viewDetailsClicked">View Details</a>
        </div>
    </div>
</template>

<script>
    import ProductService from './ProductService.js'

    export default {
        props: {
            product: {
                type: Object,
                required: true
                // props: ["product","index"], вариант обхявления без типизации
                // можно описать значение по умоляанию если заполнение его не обязательно
            },
            index: {
                type: [Number, String], // Number, а не number
                // default: 5
            }
        },
        methods: {
            viewDetailsClicked() {
                //this.$emit("viewDetails",this.product.id)
                //this.viewDetails(this.product.id)
                ProductService.viewDetails(this.product.id);
            }
        }

    }
</script>

<style>
    div.card {
        width: 500px;
        border: 1px solid red;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
</style>