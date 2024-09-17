declare module '@components/atoms/Text' {
    import { ReactNode, FC } from 'react';
  
    export interface TextProps {
      variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | 'subtitle1' | 'subtitle2';
      align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
      color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
      gutterBottom?: boolean;
      noWrap?: boolean;
      children: ReactNode;
    }
  
    const Text: FC<TextProps>;
    export default Text;
}