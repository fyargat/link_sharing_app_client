import { UISelectPlatform } from '@/src/shared/ui/ui-select';
import { Meta, type StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/SelectPlatform',
  component: UISelectPlatform,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
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
