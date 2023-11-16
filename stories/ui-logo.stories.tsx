import type { Meta, StoryObj } from '@storybook/react';

import { UILogo } from '@/src/shared/ui/ui-logo';

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

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 40 }}>
        <Story />
      </div>
    ),
  ],
};

export const Full: Story = {
  args: {
    isFull: true,
  },
};
