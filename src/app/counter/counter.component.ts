import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export default class CounterComponent{
@Input({required: true, transform: changeValue}) count: number = 0;

@Input({transform: trimValue}) message: string = "";
}

function changeValue(value: number){
    return value * 10;
}
function trimValue(value: string){
    return value.trim();
}