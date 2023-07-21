export interface IBurgerProps {
  readonly className?: string;
  readonly open?: boolean;

  onChangeState?(b: boolean): void;
}
