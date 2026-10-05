export interface PaletteSet {
  label: string;
  colors: string[];
  textColors: string[];
  names: string[];
}

const TABLEAU_10_SET: PaletteSet = {
  label: 'Tableau-10',
  colors: [
    '#e15759', // red
    '#f28e2c', // orange
    '#edc949', // yellow
    '#59a14f', // green
    '#4e79a7', // blue
    '#76b7b2', // teal
    '#ff9da7', // pink
    '#9c755f', // brown
    '#af7aa1', // purple
    '#bab0ab', // grey
  ],
  textColors: [
    '#FFFFFF',
    '#000000',
    '#000000',
    '#000000',
    '#FFFFFF',
    '#000000',
    '#000000',
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
  ],
  names: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Teal', 'Pink', 'Brown', 'Purple', 'Grey'],
};

const DEFAULT_SET: PaletteSet = {
  label: 'High Contrast',
  colors: [
    '#D32F2F',
    '#F57C00',
    '#FBC02D',
    '#388E3C',
    '#0288D1',
    '#7B1FA2',
    '#C2185B',
    '#5D4037',
    '#455A64',
    '#9E9E9E',
  ],
  textColors: [
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
  ],
  names: [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Pink',
    'Brown',
    'Blue Grey',
    'Grey',
  ],
};

const PROTANOPIA_SET: PaletteSet = {
  label: 'Protanopia (Red-Blind)',
  colors: [
    '#424242',
    '#F57C00',
    '#FBC02D',
    '#388E3C',
    '#0288D1',
    '#7B1FA2',
    '#795548',
    '#37474F',
    '#263238',
    '#9E9E9E',
  ],
  textColors: [
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
  ],
  names: [
    'Dark Gray',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Brown',
    'Dark Blue Grey',
    'Very Dark Blue Grey',
    'Grey',
  ],
};

const DEUTERANOPIA_SET: PaletteSet = {
  label: 'Deuteranopia (Green-Blind)',
  colors: [
    '#D32F2F',
    '#F57C00',
    '#FBC02D',
    '#424242',
    '#0288D1',
    '#7B1FA2',
    '#C2185B',
    '#5D4037',
    '#37474F',
    '#9E9E9E',
  ],
  textColors: [
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
  ],
  names: [
    'Red',
    'Orange',
    'Yellow',
    'Dark Gray',
    'Blue',
    'Purple',
    'Pink',
    'Brown',
    'Dark Blue Grey',
    'Grey',
  ],
};

const TRITANOPIA_SET: PaletteSet = {
  label: 'Tritanopia (Blue-Blind)',
  colors: [
    '#D32F2F',
    '#F57C00',
    '#FBC02D',
    '#388E3C',
    '#424242',
    '#616161',
    '#795548',
    '#5D4037',
    '#3E2723',
    '#9E9E9E',
  ],
  textColors: [
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
  ],
  names: [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Dark Gray',
    'Gray',
    'Brown',
    'Dark Brown',
    'Very Dark Brown',
    'Grey',
  ],
};

const PROTANOMALY_SET: PaletteSet = {
  label: 'Protanomaly (Red-Weak)',
  colors: [
    '#B71C1C',
    '#F57C00',
    '#FBC02D',
    '#388E3C',
    '#0288D1',
    '#7B1FA2',
    '#C2185B',
    '#5D4037',
    '#37474F',
    '#9E9E9E',
  ],
  textColors: [
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
  ],
  names: [
    'Dark Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Pink',
    'Brown',
    'Dark Blue Grey',
    'Grey',
  ],
};

const DEUTERANOMALY_SET: PaletteSet = {
  label: 'Deuteranomaly (Green-Weak)',
  colors: [
    '#D32F2F',
    '#F57C00',
    '#FBC02D',
    '#2E7D32',
    '#0288D1',
    '#7B1FA2',
    '#C2185B',
    '#5D4037',
    '#37474F',
    '#9E9E9E',
  ],
  textColors: [
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
  ],
  names: [
    'Red',
    'Orange',
    'Yellow',
    'Dark Green',
    'Blue',
    'Purple',
    'Pink',
    'Brown',
    'Dark Blue Grey',
    'Grey',
  ],
};

const TRITANOMALY_SET: PaletteSet = {
  label: 'Tritanomaly (Blue-Weak)',
  colors: [
    '#D32F2F',
    '#F57C00',
    '#FBC02D',
    '#388E3C',
    '#1565C0',
    '#4A148C',
    '#880E4F',
    '#3E2723',
    '#263238',
    '#9E9E9E',
  ],
  textColors: [
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
  ],
  names: [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Dark Blue',
    'Dark Purple',
    'Dark Pink',
    'Dark Brown',
    'Very Dark Blue Grey',
    'Grey',
  ],
};

const ACHROMATOPSIA_SET: PaletteSet = {
  label: 'Achromatopsia (Total)',
  colors: [
    '#212121',
    '#424242',
    '#616161',
    '#757575',
    '#9E9E9E',
    '#BDBDBD',
    '#E0E0E0',
    '#EEEEEE',
    '#F5F5F5',
    '#FFFFFF',
  ],
  textColors: [
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#FFFFFF',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
    '#000000',
  ],
  names: [
    'Very Dark',
    'Dark',
    'Medium-Dark',
    'Medium',
    'Light-Medium',
    'Light',
    'Very Light',
    'Almost White',
    'Off White',
    'White',
  ],
};

export const COLOR_PALETTE_SETS: PaletteSet[] = [
  TABLEAU_10_SET,
  DEFAULT_SET,
  PROTANOPIA_SET,
  DEUTERANOPIA_SET,
  TRITANOPIA_SET,
  PROTANOMALY_SET,
  DEUTERANOMALY_SET,
  TRITANOMALY_SET,
  ACHROMATOPSIA_SET,
];

export const COLOR_BLINDNESS_OPTIONS = COLOR_PALETTE_SETS.map((set, idx) => ({
  value: idx,
  label: set.label,
}));
