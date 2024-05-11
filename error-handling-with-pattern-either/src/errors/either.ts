// L - ERROR
// R - SUCCESS

export type Either<L, R> = Left<L, R> | Right<L, R>;

export class Left<L, R> {
  value: L;

  constructor(value: L) {
    this.value = value;
  }

  isLeft() {
    return true;
  }

  isRight() {
    return false;
  }
}

export class Right<L, R> {
  value: R;

  constructor(value: R) {
    this.value = value;
  }

  isLeft() {
    return false;
  }

  isRight() {
    return true;
  }
}

export function left<L, R>(l: L): Either<L, R> {
  return new Left(l);
}

export function right<L, R>(r: R): Either<L, R> {
  return new Right(r);
}
