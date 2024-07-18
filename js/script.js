const { createApp } = Vue

createApp({
    data() {
        return {
            new_task: null,
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
    },
    methods: {
        deleteTask(index) {
            this.coseDaFare.splice(index, 1)
        },
        changeText(index) {
           
        },
        addTask() {
            const nuovoOggetto = {
                text: this.new_task,
                done: false
            }
            this.coseDaFare.push(nuovoOggetto)
            this.new_task = null
        }
    }
}).mount('#app')

