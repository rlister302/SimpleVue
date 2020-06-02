import Vue from 'vue';
import { Component } from 'vue-property-decorator'
import Inner from './inner'

@Component({
    template: `
                <div>
                <div>Hello, World!</div>
                <inner-component message='I injected this!'></inner-component>
                </div>
                `,
    components: {
        InnerComponent: Inner
    },
    name: "hello-world"
})
export default class HelloWorld extends Vue {

}

Vue.component("hello-world", HelloWorld);