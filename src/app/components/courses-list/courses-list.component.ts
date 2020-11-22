import { Component, OnInit } from '@angular/core';
import { CoursesListServiceService } from './courses-list.service';
import { ICourses } from './../../../classes/courses';
import { StatusOption } from './../../../classes/statusOption';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  statusOption: StatusOption[];
  statusSelected: String;

  courses: ICourses[];
  filteredCourses: ICourses[];

  public errorMsg;
  constructor(private _coursesListService: CoursesListServiceService) {}

  onStatusSelected(val: string) {
      this.filteredCourses = this.filterCourses(val);
  }
  filterCourses(filterString: string) {
    if(filterString === "Course Status") {
      return this.courses
    } else {
      return this.courses.filter(course => 
        course.status.toLowerCase() === filterString.toLowerCase()
      );
    }
  }
  
  ngOnInit(): void {
    this._coursesListService.getCourses().subscribe(
      (data) => {
        (this.courses = data)
        this.filteredCourses = this.courses;
      },
      (error) => (this.errorMsg = error)
      );

    this.statusOption = [
      { Id: 1, Name: 'Course Status' },
      { Id: 2, Name: 'DRAFT' },
      { Id: 3, Name: 'PUBLISHED' },
    ];
    this.statusSelected = 'Course Status';


  }
  
}
