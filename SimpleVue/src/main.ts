//import * as Vue from 'vue';
import Vue from 'vue';


import HelloWorld from './HelloWorld';
import Inner from './inner'
import Greeting from './Greeting';


// Note that adding components like this or
// adding them into the Vue instance works as 
// expected


//Vue.component("hello-world", HelloWorld);
//Vue.component("inner-component", Inner);
//Vue.component("greeting", Greeting);
new Vue({
    el: '#app',
    components: {
        "hello-world": HelloWorld,
        "inner-component": Inner,
        "greeting": Greeting
    }
    //render: h => (h)(HelloWorld)
})