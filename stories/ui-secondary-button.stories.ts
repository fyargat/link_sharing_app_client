import { UISecondaryButton } from '@/src/shared/ui/ui-secondary-button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/SecondaryButton',
  component: UISecondaryButton,
  parameters: {},
  tags: ['autodocs'],
  args: { children: 'Save' },
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof UISecondaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const LongName: Story = {
  args: {
    children: 'Long Name Long Name Long Name Long Name',
  },
};
