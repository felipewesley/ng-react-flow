import { NgModule } from "@angular/core";

import { NgReactFlowCommonModule } from "../common/common.module";

import { LayoutComponent } from "./layout.component";

@NgModule({
    imports: [
        NgReactFlowCommonModule
    ],
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule { }