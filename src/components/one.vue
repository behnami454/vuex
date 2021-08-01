<template>
    <div>
        <div>
            <ul>
                <li v-for="behnami in random" :key="behnami">
                    <h1>{{ behnami.name }}</h1>
                    <h2>{{behnami.age}}</h2>
                </li>
            </ul>
        </div>
        <div id="btn"><button v-on:click="reduce">reduce</button></div>
        

        
    </div>
</template>

<script>
export default {
    computed:{
        behnam(){
            return this.$store.state.behnam
        },
        random(){
            return this.$store.getters.random
        }
    },
    methods:{
        reduce:function(){
            this.$store.dispatch('reduce')
        }
    }
   
};
</script>

<style >
ul{
    list-style: none;
    text-align: center;
    border: 2px solid;
    
}
li{
    text-align: center;
    background: #672020;
    margin-right:80px ;
    padding: 2px;
    color: white;
}
#btn{
    text-align: center;
}
button{
    border: 2px solid red;
    padding: 30px;
}



</style>