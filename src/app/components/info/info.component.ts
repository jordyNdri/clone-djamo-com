import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements OnInit {
  @Input() position!: string;
  @Input() title!: string;
  @Input() content!: string;

  constructor() {}

  ngOnInit(): void {
    console.log('InfoComponent');
  }
}
