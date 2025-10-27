import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Chart } from './shared/chart/chart';
import { EmpForm } from './shared/emp-form/emp-form';
import { Card } from './shared/card/card';

export const routes: Routes = [
    {path:'',component:Dashboard},
    {path:'chart',component:Chart},
    {path:'emp-form',component:EmpForm},
    {path:'card',component:Card},
];
