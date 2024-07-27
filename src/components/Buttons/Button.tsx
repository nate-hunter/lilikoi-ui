import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    withBorder?: boolean;
    borderColor?: string;
};

export const Button = ({ children, withBorder = false, borderColor = '#333' }: ButtonProps) => {
    const demoButton: React.CSSProperties = {
        borderRadius: '4px',
        // backgroundColor: 'palegoldenrod',
        backgroundColor: 'khaki',
        color: '#213547',
        padding: '4px 8px',
        fontSize: '0.875rem',
        fontWeight: '500',
        border: '1px solid transparent',
        borderColor: withBorder ? borderColor : '',
    };

    return <button style={demoButton}>{children}</button>;
};
