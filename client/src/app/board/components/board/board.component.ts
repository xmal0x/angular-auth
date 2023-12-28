import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ac-board',
  styleUrls: ['board.component.scss'],
  templateUrl: 'board.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class BoardComponent {
  calendars = []

}
