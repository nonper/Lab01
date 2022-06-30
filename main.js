const products = ""

const app = Vue.createApp({
    data() {
        return {
            products: "Boots",
            description: "A boot is a type of footwear. Most boots mainly cover the foot and the ankle, while some also cover some part of the lower calf. Some boots extend up the leg, sometimes as far as the knee or even the hip.",
            image: './assets/images/socks_green.jpg',
            url: 'https://www.camt.cmu.ac.th/',
            inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',}
            ],
            cart: 0,
            sizes: ['S', 'M', 'L'],
            isOnSale: true,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateStatus(){

            if(this.isOnSale){
                this.isOnSale = false;
                console.log("false")
            }else {
                this.isOnSale = true;
                console.log("true")
            }

            return this.isOnSale
        }
    }
})
