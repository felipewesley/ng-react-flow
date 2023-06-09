import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgReactFlowCommonModule } from "src/app/common/common.module";
import { LayoutSharedModule } from "src/app/layout/shared/shared.module";

import { NgReactFlowLibModule } from "src/app/libs/ng-react-flow/ng-react-flow.module";

import { mainRoutes as routes } from "./main.routing";

import { MainComponent } from "./main.component";

@NgModule({
    imports: [
        NgReactFlowCommonModule,
        LayoutSharedModule,

        NgReactFlowLibModule,

        RouterModule.forChild(routes)
    ],
    declarations: [
        MainComponent
    ],
    exports: []
})
export class MainModule { }