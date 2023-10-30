import { UILogo } from '@/src/shared/ui/ui-logo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Logo',
  component: UILogo,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UILogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Full: Story = {
  args: {
    isFull: true,
  },
};
