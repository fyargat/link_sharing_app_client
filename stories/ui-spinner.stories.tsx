import type { Meta, StoryObj } from '@storybook/react';

import { UISpinner } from '@/src/shared/ui/ui-spinner';
import { SpinnerSize } from '@/src/shared/ui/ui-spinner/ui-spinner.config';

const meta = {
  title: 'UI/Spinner',
  component: UISpinner,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UISpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ padding: 50 }}>
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    size: SpinnerSize.Small,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 50 }}>
        <Story />
      </div>
    ),
  ],
};

export const Large: Story = {
  args: {
    size: SpinnerSize.Large,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 50 }}>
        <Story />
      </div>
    ),
  ],
};
