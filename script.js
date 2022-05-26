const App = {
    data() {
        return {
            itemList: [],
            inputValue: ''

        }
    },
    methods: {
        addItem() {
            this.itemList.push(this.inputValue)
        }
    }
}

Vue.createApp(App).mount('#app')