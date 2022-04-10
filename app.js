
Vue.createApp({
    data(){
        return{
            input:"",
            todos:['first todo' , 'second todo'],
        }
    },
    methods:{
        add(){
            if(this.input){
                this.todos.push(this.input);
                this.input="";
            }
        },
        deletebtn(index){
            this.todos.splice(index,1)
        }
    }
}).mount("#app")