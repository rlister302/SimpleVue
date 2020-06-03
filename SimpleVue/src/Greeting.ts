import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Person } from './Person';

@Component({
    template: '<div>Hello, {{ person.firstName }} {{ person.lastName }}</div>'
})
export default class Greeting extends Vue {
    @Prop() person: Person
}