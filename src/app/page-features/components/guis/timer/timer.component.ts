import { Component, computed, signal } from '@angular/core';
import { TIMER_RANGE_MAX, TIMER_RANGE_MIN, UPDATE_STEP_MS } from './timer.const';

@Component({
  selector: 'guis-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  public progress = signal(0);
  public duration = signal(0);
  public progressPercentage = computed(() => {
    if (!this.progress() && !this.duration()) return 0;
    return Math.min(this.progress() / this.duration() * 100, 100);
  });

  protected readonly TIMER_RANGE_MAX = TIMER_RANGE_MAX;
  protected readonly TIMER_RANGE_MIN = TIMER_RANGE_MIN;
  private timerId: NodeJS.Timer | undefined;

  public resetTimer(): void {
    this.progress.set(0);

    this.resetInterval();
    this.startTimer();
  }

  public durationChange(event: Event): void {
    const rangeEl = event.target as HTMLInputElement;
    this.duration.set(+rangeEl.value);
    this.startTimer();
  }

  private startTimer(): void {
    if (this.timerId) return;

    this.timerId = setInterval(() => {
      if (this.progress() >= this.duration()) {
        this.resetInterval();
        return;
      }
      this.progress.update((progress) => +(progress + UPDATE_STEP_MS / 1000).toFixed(1));
    }, UPDATE_STEP_MS);
  }

  private resetInterval(): void {
    clearInterval(this.timerId);
    this.timerId = undefined;
  }
}
