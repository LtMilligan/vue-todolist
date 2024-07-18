const { createApp } = Vue

createApp({
    data() {
        return {
            coseDaFare: [
                {
                    text: 'Tagliare il prato',
                    done: false
                },
                {
                    text: 'Comprare il cibo per Wolfango',
                    done: false
                },
                {
                    text: 'Giocare a Tekken 8',
                    done: false
                },
                {
                    text: 'Buttare la spazzatura',
                    done: false
                },
                {
                    text: 'Chiamare Rivaldo per quel lavoretto con il rame',
                    done: false
                },
                {
                    text: 'Controllare il prezzo di BitCoin',
                    done: false
                }

            ]
        }
    }
}).mount('#app')

