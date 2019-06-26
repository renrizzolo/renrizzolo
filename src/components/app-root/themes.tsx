const sans =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol";
const serif = '"Palatino Linotype", "Book Antiqua", Palatino, Times New Roman, serif';

export const themes = {
  //default
  florence: [
    { key: '--font-primary', value: `Helvetica, ${sans}` },
    { key: '--color-primary', value: '#f9c7c7' },
    { key: '--color-primary-transparent', value: '#ffd4c333' },
    { key: '--color-primary-light', value: '#fff7f3' },
    { key: '--color-secondary', value: '#d63a1e' },
    { key: '--color-secondary-light', value: '#e88370' },
    { key: '--color-secondary-transparent', value: '#e8837033' },
    { key: '--color-g-1', value: '#36107e' },
    { key: '--color-g-2', value: '#1d1a2b' },
    { key: '--color-g-3', value: '#130b3c' },
    { key: '--color-g-4', value: '#261c57' },
    { key: '--color-logo', value: '#282828' },
  ],
  brune: [
    { key: '--font-primary', value: `Muli, ${sans}` },
    { key: '--color-primary', value: '#F7E1D7' },
    { key: '--color-primary-transparent', value: '#F7E1D733' },
    { key: '--color-primary-light', value: '#DEDBD2' },
    { key: '--color-secondary', value: '#215666' },
    { key: '--color-secondary-light', value: '#9AB2B9' },
    { key: '--color-secondary-transparent', value: '#21566615' },
    { key: '--color-g-1', value: '#EDAFB8' },
    { key: '--color-g-2', value: '#a0405f' },
    { key: '--color-g-3', value: '#EDAFB8' },
    { key: '--color-g-4', value: '#a0405f' },
    { key: '--color-logo', value: '#6c6c6c' },
  ],
  flatline: [
    { key: '--font-primary', value: `Helvetica, ${sans}` },
    { key: '--color-primary', value: '#fceef0' },
    { key: '--color-primary-transparent', value: '#fceef033' },
    { key: '--color-primary-light', value: '#fceef0' },
    { key: '--color-secondary', value: '#273043' },
    { key: '--color-secondary-light', value: '#32446B' },
    { key: '--color-secondary-transparent', value: '#32446B33' },
    { key: '--color-g-1', value: '#9197AE' },
    { key: '--color-g-2', value: '#787E96' },
    { key: '--color-g-3', value: '#9197AE' },
    { key: '--color-g-4', value: '#787E96' },
    { key: '--color-logo', value: '#8e8b8b' },
  ],
  blanche: [
    { key: '--font-primary', value: `${serif}` },
    { key: '--color-primary', value: '#222' },
    { key: '--color-primary-transparent', value: '#22233' },
    { key: '--color-primary-light', value: '#999' },
    { key: '--color-secondary', value: '#dadada' },
    { key: '--color-secondary-light', value: '#dadada' },
    { key: '--color-secondary-transparent', value: '#f7f7f7' },
    { key: '--color-g-1', value: '#fff' },
    { key: '--color-g-2', value: '#fefefe' },
    { key: '--color-g-3', value: '#fff' },
    { key: '--color-g-4', value: '#f7f7f7' },
    { key: '--color-logo', value: '#fbfbfb' },
  ],
};