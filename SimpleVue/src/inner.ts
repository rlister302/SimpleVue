import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    template: `
                <div>
                <div>I'm an inner component</div>
                <div>This is an injected message: {{ message }}</div>
                </div>`,

    name: "inner-component"
})
export default class Inner extends Vue {

    //@Prop(String) message: string;
    @Prop() message: string;


}