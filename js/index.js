Vue.createApp({
    data() {
        return {
            price: 100,
            quantity: 5
        }
    },
    computed: {
        sumAll: function() {
            return this.price * this.quantity;
        }
    },
    methods: {
        total: function() {
            return this.price * this.quantity;
        }
    }
}).mount("#app")