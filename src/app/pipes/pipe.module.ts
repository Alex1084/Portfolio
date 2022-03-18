import { NgModule } from "@angular/core";
import { PipePerso } from "./pipes-perso";

@NgModule({
    declarations: [
        PipePerso
    ],
    exports: [
        PipePerso
    ]
})
export class PipeModule { }