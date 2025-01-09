import { Component, isStandalone } from "@angular/core";

@Component({
    selector: "header-layout",
    standalone: true,
    templateUrl: "./header-layout.component.html",
    styleUrl: "./header-layout.component.scss"
})

export class HeaderComponent{
    title={
        name : "Hubert Do",
        dateOfBirth: "30/11/1999"
    };
    isDisable = true;
    altImage = "Logo Angular"
}

