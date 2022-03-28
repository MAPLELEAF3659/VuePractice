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

Vue.createApp({
    data() {
        return {
            twd: 1
        }
    },
    // methods: {
    //     twd2jpy: function() {
    //         this.jpy = this.twd * 4.2663;
    //     },
    //     jpy2twd: function() {
    //         this.twd = this.jpy / 4.2663;
    //     }
    // }
    computed: {
        jpy: {
            get() {
                return this.twd * 4.2263;
            },
            set(val) {
                this.twd = val / 4.2263;
            }
        },
        usd: {
            get() {
                return this.twd / 28.45;
            },
            set(val) {
                this.twd = val * 28.45;
            }
        }
    }
}).mount("#converter")

Vue.createApp({
    data() {
        return {
            message: "Hello",
            multilineMessage: "",
            picked: "Apple",
            checkedNums: [],
            placeSelected: ""
        }
    }
}).mount("#form")

Vue.createApp({
    data() {
        return {
            num1: 0,
            num2: 0,
            count: 0
        }
    },
    computed: {
        sum() {
            return this.num1 + this.num2;
        }
    }
}).mount("#calculator")