import type { Meta, StoryObj } from '@storybook/react';

import { UISkeleton } from '@/src/shared/ui/ui-skeleton';

const meta = {
  title: 'UI/Skeleton',
  component: UISkeleton,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UISkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
