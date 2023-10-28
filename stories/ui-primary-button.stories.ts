import { UIPrimaryButton } from '@/src/shared/ui/ui-primary-button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/PrimaryButton',
  component: UIPrimaryButton,
  parameters: {},
  tags: ['autodocs'],
  args: { text: 'Button' },
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof UIPrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const LongName: Story = {
  args: {
    text: 'Long Name Long Name Long Name Long Name',
  },
};
