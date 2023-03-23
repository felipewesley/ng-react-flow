import { ModuleWithProviders, NgModule } from "@angular/core";

@NgModule({
    imports: [],
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