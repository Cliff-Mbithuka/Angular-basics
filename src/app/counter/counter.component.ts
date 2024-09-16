import { CommonModule } from "@angular/common";
import { booleanAttribute, Component, Input } from "@angular/core";

@Component({
    standalone: true,
   imports: [CommonModule],
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export default class CounterComponent{
@Input({required: true, transform: changeValue}) count: string = '';

@Input({transform: trimValue}) message: string = "";

@Input({transform: booleanAttribute}) showcounter: boolean = false;
}

function changeValue(value: number){
    return `${value}px`;
}

function trimValue(value: string){
    return value.trim();
}