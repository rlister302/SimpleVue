import Vue from 'vue';

import HelloWorld from './HelloWorld';

Vue.component("hello-world", HelloWorld);
new Vue({
    el: '#app',
    //components: {
    //    "hello-world": HelloWorld
    //}
    //render: h => (h)(HelloWorld)
})