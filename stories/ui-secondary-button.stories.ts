import { UiSecondaryButton } from '@/src/shared/ui/ui-secondary-button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/SecondaryButton',
  component: UiSecondaryButton,
  parameters: {},
  tags: ['autodocs'],
  args: { text: 'Save' },
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof UiSecondaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const LongName: Story = {
  args: {
    text: 'Long Name Long Name Long Name Long Name',
  },
};
