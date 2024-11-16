import React from 'react';

import './button.css';

type ButtonStyleProps = {
  variant: 'default' | 'primary' | 'warning' | 'success' | 'danger';
  mode: 'on-light' | 'on-dark';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isOutlined: boolean;
  isInverted: boolean;
  isTransparent: boolean;

  // FOR CONSUMER TESTING...
  // borderColor: string;
};

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & Partial<ButtonStyleProps>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'default',
      mode = 'on-dark',
      size = 'md',
      isOutlined = false,
      isInverted = false,
      isTransparent = false,
      ...props
    },
    ref,
  ) => {
    const variantStyle = `button-variant-${variant}`;
    const outlineStyle = isOutlined ? 'is-outlined' : '';
    const invertedStyle = isInverted ? 'is-inverted' : '';
    const transparentStyle = isTransparent ? 'is-transparent' : '';
    const buttonClasses =
      `lilikoi-button ${variantStyle} ${mode} ${size} ${outlineStyle} ${invertedStyle} ${transparentStyle}`.trim();
    console.log(buttonClasses);
    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  },
);

// const demoButton: React.CSSProperties = {
//   borderRadius: '4px',
//   // backgroundColor: 'palegoldenrod',
//   backgroundColor: 'khaki',
//   color: '#213547',
//   padding: '4px 8px',
//   fontSize: '0.875rem',
//   fontWeight: '500',
//   border: '1px solid transparent',
//   borderColor: isOutlined ? borderColor : '',
// };
// const testDefaultVariantStyle: React.CSSProperties =
//   variant === 'default'
//     ? {
//         backgroundColor: 'silver',
//         color: 'black',
//       }
//     : {};
// const testPrimaryVariantStyle: React.CSSProperties =
//   variant === 'primary'
//     ? {
//         backgroundColor: 'slateblue',
//         color: 'white',
//       }
//     : {};
// const testWarningVariantStyle: React.CSSProperties =
//   variant === 'warning'
//     ? {
//         backgroundColor: 'khaki',
//         color: 'black',
//       }
//     : {};
// const testSuccessVariantStyle: React.CSSProperties =
//   variant === 'success'
//     ? {
//         backgroundColor: 'green',
//         color: 'black',
//       }
//     : {};
// const testDangerVariantStyle: React.CSSProperties =
//   variant === 'danger'
//     ? {
//         backgroundColor: 'green',
//         color: 'black',
//       }
//     : {};

// const buttonStyles = {
//   ...demoButton,
//   ...testDefaultVariantStyle,
//   ...testPrimaryVariantStyle,
//   ...testWarningVariantStyle,
//   ...testSuccessVariantStyle,
//   ...testDangerVariantStyle,
// };
