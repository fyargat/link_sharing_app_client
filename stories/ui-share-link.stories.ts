import {
  PLATFORMS,
  Platform,
  platformMap,
} from '@/src/shared/config/platforms';
import { UIShareLink } from '@/src/shared/ui/ui-share-link';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/ShareLink',
  component: UIShareLink,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UIShareLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    platform: PLATFORMS[0],
  },
};

export const FrontedMentor: Story = {
  args: {
    platform: PLATFORMS[1],
  },
};

export const StackOverflow: Story = {
  args: {
    platform: platformMap.get(Platform.StackOverflow)!,
  },
};
