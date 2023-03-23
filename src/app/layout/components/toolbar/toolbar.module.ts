import { NgModule } from "@angular/core";

import { NgReactFlowCommonModule } from "src/app/common/common.module";
import { LayoutSharedModule } from "../../shared/shared.module";

import { ToolbarComponent } from "./toolbar.component";

@NgModule({
    imports: [
        NgReactFlowCommonModule,
        LayoutSharedModule
    ],
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule { }