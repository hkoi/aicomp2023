import { Component, Input } from '@angular/core';
import * as proto from '../game';
import { BG_COLORS, FG_COLORS } from '../constants';
@Component({
  selector: 'app-grid-renderer',
  templateUrl: './grid-renderer.component.html',
  styleUrls: ['./grid-renderer.component.scss']
})
export class GridRendererComponent {
  @Input() grid: proto.Grid | null = null;
  readonly BG_COLORS = BG_COLORS;
  readonly FG_COLORS = FG_COLORS;

  format(numSoldiers: number): string {
    if (numSoldiers == 0) {
      return '-';
    }
    if (numSoldiers < 1000) {
      return numSoldiers.toString();
    }
    return '999';
  }
}
