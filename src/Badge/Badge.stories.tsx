import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Lilikoi Badge',
    variant: "default",
  },
};

export const PrimaryBadge: Story = {
  args: {
    children: "Lilikoi Badge",
    variant: "primary"
  }
};
