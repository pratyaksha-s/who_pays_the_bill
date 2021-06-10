new Vue({
    el: "#app",
    data: {
        state: true,
        input_name: "",
        names: [],
        showError: false,
        result: "",

    },
    methods: {
        AddNameTolist() {
            console.log(this.names)
            if (this.validate(this.input_name)) {
                this.names.push(this.input_name);
                this.input_name = "";
                this.showError = false

            } else {
                this.showError = true;
            }
        },
        validate(value) {
            if (value !== "") {
                return true
            } else {
                return false
            }

        },
        showResults() {
            let rand = this.names[Math.floor(Math.random() * this.names.length)]
            this.result = rand;
            this.state = false


        },
        resetApp() {
            this.state = true;
            this.names = [];
            this.result = "";
        },
        removeEl(index) {
            this.names.splice(index, 1);

        }
    }
})