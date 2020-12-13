const Color = {
  Dark: {
    default: '#000436',
    medium: 'gray',
    light: 'lightgray',
  },
  Primary: {
    default: '#008223',
    dark: '#004D14',
    light: '#00C434',
  },
};

type Swatch = typeof Color[keyof typeof Color]

export type ColorEnum = Swatch[keyof Swatch];

export default Color;
