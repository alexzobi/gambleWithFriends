type Swatch = {
  dark?: string;
  default?: string;
  light?: string;
};

type ColorType = { [key: string]: Swatch };

const Color: ColorType = {
  Dark: {
    default: '#000436',
  },
  Primary: {
    default: '#008223',
    dark: '#004D14',
    light: '#00C434',
  },
};

export default Color;
