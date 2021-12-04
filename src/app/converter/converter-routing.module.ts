import { Routes } from "@angular/router";
import { ConverterComponent } from "./components/converter.component";

export const ConverterRoutes: Routes = [
    {
        path: 'currency-converter',
        component: ConverterComponent
    }
];