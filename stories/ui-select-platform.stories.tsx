import { Meta, type StoryObj } from '@storybook/react';

import { Platform } from '@/src/shared/config/platforms';
import { UISelectPlatform } from '@/src/shared/ui/ui-select';

const meta = {
  title: 'UI/SelectPlatform',
  component: UISelectPlatform,
  parameters: {},
  tags: ['autodocs'],
  args: {
    platformId: Platform.Codepen,
  },
  argTypes: { onSelectPlatform: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UISelectPlatform>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
