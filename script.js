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
        },
        delItem(key) {
            this.itemList.splice(key, 1);
        }
    }
}

Vue.createApp(App).mount('#app')