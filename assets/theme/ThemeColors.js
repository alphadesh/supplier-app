const userTheme = 'light';

const LightThemeColors = {
  primaryColor: '#FFFFFF', //white
  secondaryColor: '#D9E5ED', //light blue
  primaryReverseColor: '#1E3258', //dark blue
  secondaryReverseColor: '#333333', //black

  primaryTextColor: '#1E3258', //dark blue
  secondaryTextColor: '#333333', //black
  primaryReverseTextColor: '#FFFFFF', //white
  secondaryReverseTextColor: '#D9E5ED', //light blue
};

const DarkThemeColors = {
  primaryColor: '#1E3258', //dark blue
  secondaryColor: '#333333', //black
  primaryReverseColor: '#FFFFFF', //white
  secondaryReverseColor: '#D9E5ED', //light blue

  primaryTextColor: '#FFFFFF', //white
  secondaryTextColor: '#D9E5ED', //light blue
  primaryReverseTextColor: '#1E3258', //dark blue
  secondaryReverseTextColor: '#333333', //black
};

const GreenThemeColors = {
  primaryColor: '#2F5233', //dark blue
  secondaryColor: '#76B947', //black
  primaryReverseColor: '#B1D8B7', //white
  secondaryReverseColor: '#94C973', //light blue

  primaryTextColor: '#B1D8B7', //white
  secondaryTextColor: '#94C973', //light blue
  primaryReverseTextColor: '#2F5233', //dark blue
  secondaryReverseTextColor: '#76B947', //black
};

const ThemeColors =
  userTheme === 'light'
    ? LightThemeColors
    : userTheme === 'dark'
    ? DarkThemeColors
    : GreenThemeColors; 

export default ThemeColors;
