//import * as Vue from 'vue';
import Vue from 'vue';


import HelloWorld from './HelloWorld';
import Inner from './inner'

Vue.component("hello-world", HelloWorld);
Vue.component("inner-component", Inner)
new Vue({
    el: '#app',
    //components: {
    //    "hello-world": HelloWorld
    //}
    //render: h => (h)(HelloWorld)
})