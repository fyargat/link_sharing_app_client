import type { Meta, StoryObj } from '@storybook/react';

import { UIEditableShareLink } from '@/src/entities/share-link';

const meta = {
  title: 'UI/EditableShareLink',
  component: UIEditableShareLink,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UIEditableShareLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
