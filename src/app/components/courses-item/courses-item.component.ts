import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CoursesListServiceService } from './../courses-list/courses-list.service';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent implements OnInit {
  id: number;
  course;
  constructor(private _coursesListService: CoursesListServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  
  goBack(){
    this.router.navigate(['../../'],
    {relativeTo: this.activatedRoute});
  }  

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe(
      map((param: ParamMap) => {
        //@ts-ignore
        return param.params.id;
      })
    )
    .subscribe(courseId => {
      this.id = courseId;
      this._coursesListService.getSingleCourse(this.id).subscribe(course => {
        this.course = course;
      })
    })
  }
  

}
