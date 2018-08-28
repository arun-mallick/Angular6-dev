import { Component } from '@angular/core';

@Component({
    selector:'data-binding',
    templateUrl:'./data-binding.component.html'
})

export class DataBindingComponent {
    userName = "";
    name = "";
    displayName(){
        this.name = this.userName;
    }
    emptyString(){
        this.userName = "";
        this.name = "";
    }
    
}