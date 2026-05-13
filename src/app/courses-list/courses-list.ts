import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import  {CourseService} from '../services/course.service';
import { Course } from '../models/Course';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList implements OnInit  {

  // add signal for title
title = 'Courses List';
courses : Course[] = [];

wishlistItems: any[] = [];

constructor(private courseService: CourseService) {
  console.log('CoursesList component created..');
}

ngOnInit() {
  console.log('CoursesList component initialized..');
  this.courses = this.courseService.getCourses();
} 

enroll(course: any) {
  this.courses = this.courses.filter(c => c !== course);

}

wishlist(course: any) {
  console.log('Course added to wishlist:', course);
  this.wishlistItems.push(course);
}
}
