<template>
    <div>
        <ProductItem v-for="(product, i) in products" :key="product.id"
                     :product="product" :index="(i+1)"></ProductItem>
    </div>
</template>

<script>
    import ProductItem from './ProductItem.vue'
    import ProductService from './ProductService.js'

    export default {
        data(){
            return{
                products: []
            }
        },
        components: {
            ProductItem
        },
        created(){
            this.products = ProductService.products;
        }
    }
</script>

