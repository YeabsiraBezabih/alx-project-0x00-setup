export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string;
  styles: {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  };
  onClick?: () => void;
}