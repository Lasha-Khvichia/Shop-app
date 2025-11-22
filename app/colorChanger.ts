export enum colors {
    light = '#FFF',
    buttonLightDark = '#242424',
    dark = '#0F1419'
}

export class colorChange {
  constructor() {
    this.currentColor = "#FFF";
  }
  private currentColor: string;

  changeColor = (color: string) => {
    if (!color) return;

    this.currentColor = color;
  }

  getColor = () => {
    return this.currentColor;
  }
}