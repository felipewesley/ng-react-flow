import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgReactFlowCommonModule } from "src/app/common/common.module";

import { mainRoutes as routes } from "./main.routing";

import { MainComponent } from "./main.component";

@NgModule({
    imports: [
        NgReactFlowCommonModule,

        RouterModule.forChild(routes)
    ],
    declarations: [
        MainComponent
    ],
    exports: []
})
export class MainModule { }