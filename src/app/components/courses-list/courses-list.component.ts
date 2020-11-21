import { Component, OnInit } from '@angular/core';
import { CoursesListServiceService } from './courses-list.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  
  public courses = [];

  constructor(private _coursesListService: CoursesListServiceService) { }

  ngOnInit(): void {
    this._coursesListService.getCourses()
      .subscribe(data => this.courses = data)
  }

}
