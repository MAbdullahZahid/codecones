declare module "split-type" {
  class SplitType {
    constructor(element: string | HTMLElement, options: { types: string });
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }

  export default SplitType;
}
