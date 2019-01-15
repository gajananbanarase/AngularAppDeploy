import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Arts' },
    { id: 3, name: 'Languages' }
  ]

  submitForm(course) {
    console.log(course);
  }
}
