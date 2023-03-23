import { ModuleWithProviders, NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: []
})
export class NgReactFlowCoreModule {
    
    /**
     *
     */
    constructor() {
        
    }

    static forRoot(): ModuleWithProviders<NgReactFlowCoreModule> {

        return {
            ngModule: NgReactFlowCoreModule,
            providers: [

            ]
        };
    }
}