import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1Component } from './screens/screen1/screen1.component';
import { Screen2Component } from './screens/screen2/screen2.component';
import { SimpleTableComponent } from './screens/simple-table/simple-table.component';

const routes: Routes = [
  {
    path: 'screen1',
    component:Screen1Component
  },
  {
    path: 'screen2',
    component:Screen2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
