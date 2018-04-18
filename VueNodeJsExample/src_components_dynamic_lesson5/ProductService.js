import Vue from 'vue'
import _ from 'lodash';

export default new Vue({
    data: {
        products:[
            {
                id: 1,
                title: 'Product #1',
                price: 50,
                qt: 1000
            },
            {
                id: 2,
                title: 'Product #2',
                price: 100,
                qt: 465
            },
            {
                id: 3,
                title: 'Product #3',
                price: 40,
                qt: 300
            },
            {
                id: 4,
                title: 'Product #4',
                price: 70,
                qt: 50
            }
        ]
    },
    methods: {
        viewDetails(id){
            let productToView = _.find(this.products, {id:id});
            this.$emit("viewDetails", productToView);
        },
        addProduct(title,price,qt){
            var id = this.products[this.products.length-1].id + 1;
            this.products.push({
                id,
                title,
                price,
                qt
            })
        }
    }
})