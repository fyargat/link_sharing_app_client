import type { Meta, StoryObj } from '@storybook/react';

import { UIButtonSpinner } from '@/src/shared/ui/ui-button-spinner';

const meta = {
  title: 'UI/ButtonSpinner',
  component: UIButtonSpinner,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UIButtonSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
  decorators: [
    (Story) => (
      <button
        style={{
          padding: '10px 16px',
          borderRadius: 20,
          minWidth: 200,
          backgroundColor: 'chocolate',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </button>
    ),
  ],
};
