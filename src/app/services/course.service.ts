import { Injectable } from '@angular/core';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

private courses: Course[]=
  [
    { title: 'Introduction to Angular 1', date: '2023-01-01', description: 'Learn the basics of Angular, including components, templates, and data binding.', duration: '4 weeks', price: 19 },
    { title: 'Advanced Angular', date: '2023-02-01', description: 'Dive deeper into Angular with advanced topics like routing, state management, and performance optimization.', duration: '6 weeks', price: 299 },
    { title: 'Angular for Beginners', date: '2023-03-01', description: 'A comprehensive introduction to Angular for those new to web development.', duration: '8 weeks', price: 199 },
  ];

  constructor() {
    console.log('Course service created..');
  }

  getCourses(): Course[] {
    console.log('Fetching courses from service..');
    return this.courses;
  }
}
