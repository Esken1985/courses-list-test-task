import { Component, OnInit } from '@angular/core';
import { SelectOptions } from './../../models/selectOptions.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  selectOptions: SelectOptions[] = [
    {id: 1, name: "Draft"},
    {id: 2, name: "Published"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
