<template>
    <div class="product">
        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title"
                       placeholder="Enter title" v-model="product.title"/>
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" class="form-control" id="price"
                       placeholder="Enter price" v-model="product.price"/>
            </div>
            <div class="form-group">
                <label for="qt">Quantity</label>
                <input type="text" class="form-control" id="qt"
                       placeholder="Enter quantity" v-model="product.qt"/>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="addProduct">Submit</button>
        </form>
    </div>
</template>

<script>
    import ProductService from './ProductService.js'
    export default {
        data(){
            return{
                product:{}
            }
        },
        methods: {
            addProduct(){
                ProductService.addProduct(this.product.title,this.product.price,this.product.qt);
            }
        }
    }
</script>

<style scoped>

</style>