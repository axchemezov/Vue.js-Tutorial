<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <products @viewDetails2="viewDetails"></products>
      <product-details :product="selectedProduct"></product-details>
    </div>
  </div>
</template>

<script>
import ProductsList from "./ProductsList";
import ProductDetails from "./ProductDetails";
import Header from "./Header";

export default {
    data(){
        return{
            selectedProduct: {}
        }
    },
    components: {
        'products': ProductsList,
        'my-header': Header,
        ProductDetails
    },
    methods:{
        viewDetails(product){
            this.selectedProduct = product
          }
        }
    }

</script>

<style>
  .container{
    display:flex;
    align-items:flex-start;
  }
</style>