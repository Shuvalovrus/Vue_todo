const App = {
    data() {
        return {
            itemList: [],
            inputValue: ''

        }
    },
    methods: {
        addItem() {
            if (this.inputValue !== '') {
                this.itemList.push(this.inputValue)
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')