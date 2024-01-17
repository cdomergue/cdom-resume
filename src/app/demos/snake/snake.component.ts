import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  HostListener,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { NgForOf, NgStyle } from '@angular/common';
import { interval } from 'rxjs';
import { AppTranslationEn, AppTranslationFr } from '../../app.data';
import { LanguageService } from '../../language.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [NgStyle, NgForOf, MatButtonModule],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DemosComponent implements OnDestroy {
  private readonly _initialValue = [
    { id: 1, top: 16, left: 16 },
    { id: 2, top: 16, left: 24 },
  ];
  snakeSegments = signal(this._initialValue);
  foodPosition = signal({ top: this.generateRandomFoodPosition(), left: this.generateRandomFoodPosition() });
  points = signal(0);
  playing = interval(100).subscribe((id) => {
    this.moveSnake(id);
    this.checkForFood();
  });
  appTranslation = computed(() => (this.currentLanguage() === 'french' ? AppTranslationFr : AppTranslationEn));

  private currentLanguage = inject(LanguageService).currentLanguage;
  private currentDirection = signal('pause');
  private lastKeyPressed = 'z';
  private started = false;
  private rythm: any;

  constructor() {
    this.initRythm();
    effect(() => {
      if (this.currentDirection() !== 'pause') {
        this.lastKeyPressed = this.currentDirection();
      }
    });
  }
  ngOnDestroy(): void {
    this.playing.unsubscribe();
    this.rythm.stop();
    this.rythm = undefined;
  }

  moveSnake(id: number | undefined): void {
    if (this.currentDirection() === 'pause') {
      return;
    }
    let newHead = { ...this.snakeSegments()[0] };
    newHead.id = id ?? 0;
    this.handleDirection(newHead);
    this.handleBordersTouch(newHead);
    this.snakeSegments.update((snakeSegments) => {
      const newSegments = [...[newHead], ...snakeSegments];
      newSegments.pop();
      return newSegments;
    });
    if (this.checkForSelfCollision()) {
      this.gameOver();
    }
  }

  checkForFood(): void {
    let head = this.snakeSegments()[0];
    if (head.top === this.foodPosition().top && head.left === this.foodPosition().left) {
      this.points.update((points) => points + 1);
      this.snakeSegments.update((snakeSegments) => {
        snakeSegments.push({ ...snakeSegments[snakeSegments.length - 1] });
        return snakeSegments;
      });
      // Replace food to a new position
      this.foodPosition.set({ top: this.generateRandomFoodPosition(), left: this.generateRandomFoodPosition() });
    }
  }

  checkForSelfCollision(): boolean {
    const head = this.snakeSegments()[0];
    return this.snakeSegments().some((segment, index) => {
      return index !== 0 && segment.top === head.top && segment.left === head.left;
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.stopPropagation();
    if (this.lastKeyPressed === 'd' || this.lastKeyPressed === 'q' || this.lastKeyPressed === 'a') {
      if (!this.started) {
        this.rythm.start();
        this.started = true;
      }
      if (event.key! === 'z' || event.key! === 'w' || event.key === 's') {
        this.currentDirection.set(event.key);
      }
    } else if (this.lastKeyPressed === 'z' || this.lastKeyPressed === 'w' || this.lastKeyPressed === 's') {
      if (event.key === 'd' || event.key === 'q' || event.key === 'a') {
        this.currentDirection.set(event.key);
      }
    }
    if (event.key === ' ') {
      this.currentDirection.set('pause');
    }
  }

  generateRandomFoodPosition() {
    const min = 16;
    const max = 488;
    return Math.floor(Math.random() * (max / 8 - min / 8 + 1) + min / 8) * 8;
  }

  stopAudio() {
    this.rythm.stop();
  }

  private handleDirection(newHead: { top: number; left: number; id: number }) {
    switch (this.currentDirection()) {
      case 'd':
        newHead.left += 8;
        break;
      case 'q':
      case 'a':
        newHead.left -= 8;
        break;
      case 'z':
      case 'w':
        newHead.top -= 8;
        break;
      case 's':
        newHead.top += 8;
        break;
    }
  }

  private handleBordersTouch(newHead: { top: number; left: number; id: number }) {
    if (newHead.left > 496) {
      newHead.left = 0;
    }
    if (newHead.top > 496) {
      newHead.top = 0;
    }
    if (newHead.left < 0) {
      newHead.left = 496;
    }
    if (newHead.top < 0) {
      newHead.top = 496;
    }
  }

  private gameOver() {
    this.snakeSegments.set(this._initialValue);
    this.points.set(0);
    this.rythm.stop(false);
    this.currentDirection.set('pause');
    this.lastKeyPressed = 'z';
    this.started = false;
  }

  private initRythm() {
    // @ts-ignore
    this.rythm = new Rythm();
    this.rythm.setMusic('assets/bip-boup.webm');
    this.rythm.startingScale = 1;
    this.rythm.addRythm('game-board', 'color', 0, 10);
    this.rythm.addRythm('segment', 'color', 0, 10, {
      from: [255, 255, 0],
      to: [255, 0, 0],
    });
    this.rythm.addRythm('food', 'color', 500, 100, {
      from: [255, 255, 0],
      to: [255, 0, 0],
    });
    this.rythm.addRythm('food', 'pulse', 0, 10);
  }
}
