import { Routes } from "@angular/router";

/**
 * App routing
 */
export const appRoutes: Routes = [

    {
        path: '',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
    }

];