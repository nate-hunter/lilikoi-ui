import React from 'react';

import './badge.css';

type BadgeProps = {
  children: React.ReactNode;
  variant: 'default' | 'primary';
};

export function Badge({ children, variant = 'default', ...props }: BadgeProps) {
  const styles = `test-badge ${variant}`.trim();
  console.log(styles);
  return (
    <div className={`test-badge ${variant}`.trim()} {...props}>
      {children}
    </div>
  );
}
