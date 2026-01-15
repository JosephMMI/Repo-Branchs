import { api, LightningElement } from 'lwc';

export default class HelloWorld_Tst extends LightningElement {
    @api name;

    connectedCallback(){
        console.log('Component initialized with name: ' + this.name);
        console.log('Hello from connectedCallback! main branch');
        console.log('Feature XYZ implemented.');
    }
    
    handleChange(event) {
        this.name = event.target.value;
        console.log(this.name);
    }
}