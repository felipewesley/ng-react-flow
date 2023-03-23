import { NgModule } from "@angular/core";

import { NgReactFlowCommonModule } from "src/app/common/common.module";
import { NgReactFlowLibComponent } from "./ng-react-flow.component";
import { NgReactFlowLibWrapperComponent } from "./wrapper/wrapper.component";

@NgModule({
    imports: [
        NgReactFlowCommonModule
    ],
    declarations: [
        NgReactFlowLibComponent,
        NgReactFlowLibWrapperComponent
    ],
    exports: [
        NgReactFlowLibComponent
    ]
})
export class NgReactFlowLibModule { }