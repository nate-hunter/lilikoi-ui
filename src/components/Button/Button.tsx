import React from 'react';

type ButtonStyleProps = {
  variant: 'default' | 'primary' | 'warning' | 'success' | 'danger';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isOutlined: boolean;
  isInverted: boolean;
  isTransparent: boolean;
  // FOR CONSUMER TESTING...
  borderColor: string;
};

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & Partial<ButtonStyleProps>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'default', isOutlined = false, borderColor = 'deeppink', ...props }, ref) => {
    const demoButton: React.CSSProperties = {
      borderRadius: '4px',
      // backgroundColor: 'palegoldenrod',
      backgroundColor: 'khaki',
      color: '#213547',
      padding: '4px 8px',
      fontSize: '0.875rem',
      fontWeight: '500',
      border: '1px solid transparent',
      borderColor: isOutlined ? borderColor : '',
    };
    const testDefaultVariantStyle: React.CSSProperties =
      variant === 'default'
        ? {
            backgroundColor: 'silver',
            color: 'black',
          }
        : {};
    const testPrimaryVariantStyle: React.CSSProperties =
      variant === 'primary'
        ? {
            backgroundColor: 'slateblue',
            color: 'white',
          }
        : {};
    const testWarningVariantStyle: React.CSSProperties =
      variant === 'warning'
        ? {
            backgroundColor: 'khaki',
            color: 'black',
          }
        : {};
    const testSuccessVariantStyle: React.CSSProperties =
      variant === 'success'
        ? {
            backgroundColor: 'green',
            color: 'black',
          }
        : {};
    const testDangerVariantStyle: React.CSSProperties =
      variant === 'danger'
        ? {
            backgroundColor: 'green',
            color: 'black',
          }
        : {};

    const buttonStyles = {
      ...demoButton,
      ...testDefaultVariantStyle,
      ...testPrimaryVariantStyle,
      ...testWarningVariantStyle,
      ...testSuccessVariantStyle,
      ...testDangerVariantStyle,
    };

    return (
      <button ref={ref} style={buttonStyles} {...props}>
        {children}
      </button>
    );
  },
);

export default Button;
