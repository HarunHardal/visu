import { debounce } from './cammon';
import SplitType, { SplitTypeOptions } from 'split-type';

type SplitTypes = 'lines' | 'words' | 'chars';

export class TextSplitter {
  private textElement: HTMLElement;
  private onResize: (() => void) | null;
  private splitText: SplitType;
  private previousContainerWidth: number | null;

  constructor(
    textElement: HTMLElement,
    options: { resizeCallback?: () => void; splitTypeTypes?: SplitTypes | SplitTypes[] } = {}
  ) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error("Invalid text element provided.");
    }

    const { resizeCallback, splitTypeTypes } = options;
    this.textElement = textElement;
    this.onResize = typeof resizeCallback === "function" ? resizeCallback : null;

    const splitOptions: Partial<SplitTypeOptions> = splitTypeTypes
      ? { types: splitTypeTypes }
      : {};
    this.splitText = new SplitType(this.textElement, splitOptions);
    this.previousContainerWidth = null;

    if (this.onResize) {
      this.initResizeObserver();
    }
  }

  private initResizeObserver(): void {
    const resizeObserver = new ResizeObserver(
      debounce((entries) => this.handleResize(entries), 100)
    );
    resizeObserver.observe(this.textElement);
  }

  private handleResize(entries: ResizeObserverEntry[]): void {
    const [{ contentRect }] = entries;
    const width = Math.floor(contentRect.width);
    if (this.previousContainerWidth && this.previousContainerWidth !== width) {
      this.splitText.split({});
      this.onResize?.();
    }
    this.previousContainerWidth = width;
  }

  public getLines(): HTMLElement[] {
    return (this.splitText.lines as HTMLElement[]) || [];
  }

  public getWords(): HTMLElement[] {
    return (this.splitText.words as HTMLElement[]) || [];
  }

  public getChars(): HTMLElement[] {
    return (this.splitText.chars as HTMLElement[]) || [];
  }
}