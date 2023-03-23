import { NgModule } from "@angular/core";

import { NgReactFlowCommonModule } from "../common/common.module";
import { ToolbarModule } from "./components/toolbar/toolbar.module";

import { LayoutComponent } from "./layout.component";

@NgModule({
    imports: [
        NgReactFlowCommonModule,

        ToolbarModule
    ],
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule { }