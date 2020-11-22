import { Component, OnInit } from '@angular/core';
import { CoursesListServiceService } from './courses-list.service';
import { ICourses } from './../../../classes/courses';
import { StatusOption } from './../../../classes/statusOption';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  statusOption: StatusOption[];
  statusSelected: String;

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredCourses = this.filterCoursesBySearch(value);
  }


  courses: ICourses[];
  filteredCourses: ICourses[];

  public errorMsg;
  constructor(private _coursesListService: CoursesListServiceService) {}

  onStatusSelected(val: string) {
      this.filteredCourses = this.filterCoursesByOption(val);
  }

  filterCoursesByOption(filterString: string) {
    if(filterString === "Course Status") {
      return this.courses
    } else {
      return this.courses.filter(course => 
        course.status.toLowerCase() === filterString.toLowerCase()
      );
    }
  }

  filterCoursesBySearch(searchStrng: string) {
    return this.courses.filter(course =>
      course.name.toLowerCase().indexOf(searchStrng.toLowerCase()) !== -1);
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
