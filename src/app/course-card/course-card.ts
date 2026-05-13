import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, Output, output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {

  title = 'Course Card';

  @Input() course: any;

  @Output() onEnroll = new EventEmitter<any>();

  @Output() onWishlist = new EventEmitter<any>();

  enroll(): void {
    console.log('Enrolling in course:', this.course);
    this.onEnroll.emit(this.course);
  }

  wishlist(): void {
    console.log('Adding course to wishlist:', this.course);
    this.onWishlist.emit(this.course);
  }
}
