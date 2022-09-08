import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() cardImage!: string;
  @Input() cardTitle!: string;
  @Input() cardStatus!: string;
  @Input() cardWebsite!: any;

  constructor() {}
}
