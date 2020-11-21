import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

const routes: Routes = [
  // {
  //   path: '/:id', component: CoursesItemComponent
  // },
  {
    path: '', component: CoursesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CoursesListComponent, CoursesItemComponent]
