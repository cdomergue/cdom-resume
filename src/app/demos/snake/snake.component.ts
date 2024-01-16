import { ChangeDetectionStrategy, Component, effect, HostListener, OnDestroy, signal } from '@angular/core';
import { NgForOf, NgStyle } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [NgStyle, NgForOf],
  templateUrl: './snake.component.html',
  styleUrl: './snake.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DemosComponent implements OnDestroy {
  snakeSegments = signal([
    { id: 1, top: 16, left: 16 },
    { id: 2, top: 16, left: 24 },
  ]);
  foodPosition = signal({ top: this.generateRandomFoodPosition(), left: this.generateRandomFoodPosition() });
  points = signal(0);
  playing = interval(100).subscribe((id) => {
    this.moveSnake(id);
    this.checkForFood();
  });
  private currentDirection = signal('pause');
  private lastKeyPressed = 'z';

  constructor() {
    effect(() => {
      if (this.currentDirection() !== 'pause') {
        this.lastKeyPressed = this.currentDirection();
      }
    });
  }

  ngOnDestroy(): void {
    this.playing.unsubscribe();
  }

  moveSnake(id: number | undefined): void {
    if (this.currentDirection() === 'pause') {
      return;
    }
    let newHead = { ...this.snakeSegments()[0] };
    newHead.id = id ?? 0;
    switch (this.currentDirection()) {
      case 'd':
        newHead.left += 8;
        break;
      case 'q':
        newHead.left -= 8;
        break;
      case 'z':
        newHead.top -= 8;
        break;
      case 's':
        newHead.top += 8;
        break;
    }
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
    this.snakeSegments.update((snakeSegments) => {
      const newSegments = [...[newHead], ...snakeSegments];
      newSegments.pop();
      return newSegments;
    });
    if (this.checkForSelfCollision()) {
      this.currentDirection.set('pause');
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
    if (this.lastKeyPressed === 'd' || this.lastKeyPressed === 'q') {
      if (event.key! === 'z' || event.key === 's') {
        this.currentDirection.set(event.key);
      }
    } else if (this.lastKeyPressed === 'z' || this.lastKeyPressed === 's') {
      if (event.key === 'd' || event.key === 'q') {
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
}
