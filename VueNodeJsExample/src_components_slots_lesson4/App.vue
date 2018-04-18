<template>
  <div>
    <my-header>
      <h1>Communication between components in Vue.js</h1>
      <span>{{secondPart}}</span>
      <h2 slot="subtitle">Slots</h2>
      <span slot="subtitle">{{slotsSecondPart}}</span>
    </my-header>
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
            secondPart: 'Second part',
            slotsSecondPart: 'Slots - second part',
        }
    },
    components: {
        'products': ProductsList,
        'my-header': Header,
        ProductDetails
    }
}
</script>

<style scoped>
  .container{
    display:flex;
    align-items:flex-start;
  }

  h2{
    color:red;
  }
</style>