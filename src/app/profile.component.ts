import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-profile, [app-profile]',
    templateUrl:'./profile.component.html',
    styleUrls: ['./profile.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export default class ProfileComponent{

}