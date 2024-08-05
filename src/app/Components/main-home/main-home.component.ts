import { Component } from '@angular/core';
import { TrackInfo } from '../../Models/track-info';
import { CourseInfo } from '../../Models/course-info';

@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {
// properties //methods
userName: string = 'Ali';
num: number = 4;
sayHello() {
  return `Hello ${this.userName}`;
}

// use class model
track: TrackInfo = new TrackInfo(
  'MEARN Track',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxro4be5d14G26GQeenzm548i5RrIY8pMqw&s',
  42
);

// use interface model
course: CourseInfo = {
  courseName: 'JS',
  coursesHours: 18,
  topics: ['BOM', 'DOM', 'Ajax'],
};
}
