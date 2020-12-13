const Color = {
  Dark: {
    default: '#000436',
    medium: 'gray',
    light: 'lightgray',
  },
  Primary: {
    default: '#004D14',
    medium: '#008223',
    light: '#00C434',
  },
  Error: {
    default: '#FA4A5B',
    medium: '#FFB6BD',
    light: '#FFF1F1',
  },
};

type Swatch = typeof Color[keyof typeof Color]

export type ColorEnum = Swatch[keyof Swatch];

export default Color;
