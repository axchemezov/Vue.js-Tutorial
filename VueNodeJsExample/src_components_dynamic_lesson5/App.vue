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
      <span @click="(mode=(mode =='view' ? 'add' : 'view'))">Mode: {{mode}}</span>
      <keep-alive> <!-- сохранит значения в форме добавления при переключении на форму отображения -->
        <component :is="componentName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import ProductsList from "./ProductsList";
import ProductDetails from "./ProductDetails";
import ProductAdd from "./ProductAdd"
import Header from "./Header";

export default {
    data(){
        return{
            secondPart: 'Second part',
            slotsSecondPart: 'Slots - second part',
            mode: 'view'
        }
    },
    computed: {
        componentName(){
          return this.mode=='view' ? 'ProductDetails' : 'ProductAdd';
        }
    },
    components: {
        'products': ProductsList,
        'my-header': Header,
        ProductDetails,
        ProductAdd
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