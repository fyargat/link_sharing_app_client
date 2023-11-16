import type { Meta, StoryObj } from '@storybook/react';

import { UIPageSpinner } from '@/src/shared/ui/ui-page-spinner';

const meta = {
  title: 'UI/PageSpinner',
  component: UIPageSpinner,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UIPageSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
