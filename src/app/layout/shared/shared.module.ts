import { NgModule } from "@angular/core";

import { MaterialModule } from "./material/material.module";

@NgModule({
    imports: [
        MaterialModule.forRoot()
    ],
    exports: [
        MaterialModule
    ]
})
export class LayoutSharedModule { }