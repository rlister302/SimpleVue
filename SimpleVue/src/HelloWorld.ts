import Vue from 'vue';
import { Component } from 'vue-property-decorator'
import Inner from './inner'



@Component({
    template: `
                <div>
                <div>Hello, World!</div>
                </div>
                `,
    name: "hello-world",
    //components: {
    //    "inner-component": Inner
    //}
})
export default class HelloWorld extends Vue {

}

//Vue.component("hello-world", HelloWorld);