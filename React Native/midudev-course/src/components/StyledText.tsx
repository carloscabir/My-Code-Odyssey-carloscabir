import { Text, StyleSheet } from 'react-native';
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: 400,
  },
  bold: {
    fontWeight: 700,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  colorGray: {
    color: theme.colors.gray,
  },
  // Font sizes
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  subTitle: {
    fontSize: theme.fontSizes.subtitle,
  },
  small: {
    fontSize: theme.fontSizes.small,
  },
  align: {
    textAlign: 'center',
  }
});

interface Props {
  children: React.ReactNode
  color?: string
  align?: string
  fontSize?: string | number
  fontWeight?: string | number
  style?: any
  [key: string]: any
 }

export const StyledText: React.FC<Props> = ({ children, color, align, fontSize, fontWeight, style, ...restOfProps }) => { 
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    color === 'white' && styles.colorWhite,
    color === 'gray' && styles.colorGray,
    // Align text
    align === 'center' && styles.align,
    // Font sizes
    (fontSize === 'subheading' || fontSize === 16 || fontSize === '16') && styles.subheading,
    (fontSize === 'small' || fontSize === 8 || fontSize === '8') && styles.small,
    (fontSize === 'subtitle' || fontSize === 18 || fontSize === '18') && styles.subTitle,
    (fontWeight === 'bold' || fontWeight === 700 || fontWeight === '700') && styles.bold,
    style
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}