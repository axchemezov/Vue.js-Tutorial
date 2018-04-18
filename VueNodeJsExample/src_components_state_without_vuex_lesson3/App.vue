<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <products></products>
      <product-details></product-details>
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

        }
    },
    components: {
        'products': ProductsList,
        'my-header': Header,
        ProductDetails
    }
}

</script>

<style>
  .container{
    display:flex;
    align-items:flex-start;
  }
</style>