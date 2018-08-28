import { Component } from '@angular/core';

@Component({
    selector:'my-directives',
    templateUrl:'my-directives.component.html',
    styles:['.text-color { color: white; }']
})

export class MyDirectivesComponent {
    arr:any = [];
    display:boolean = false;
    toggle(){
        if(this.display){
            this.display = false;
        }else{
            this.display = true;
        }
        this.arr.push(new Date());
    }
}