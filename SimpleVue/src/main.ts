import Vue from 'vue';

import HelloWorld from './HelloWorld';

new Vue({
    el: '#app',
    render: h => (h)(HelloWorld)
})