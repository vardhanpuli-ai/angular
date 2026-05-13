import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoursesList, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('course-booking-system-front page');
}
