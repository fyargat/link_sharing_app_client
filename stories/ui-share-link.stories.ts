import type { Meta, StoryObj } from '@storybook/react';

import { Platform } from '@/src/shared/config/platforms';
import { UIShareLink } from '@/src/shared/ui/ui-share-link';

const getLink = (platformId: Platform) => {
  return { id: 1, ownerId: 1, platformId, text: '' };
};

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
    link: getLink(Platform.Codepen),
  },
};

export const FrontedMentor: Story = {
  args: {
    link: getLink(Platform.FrontendMentor),
  },
};

export const StackOverflow: Story = {
  args: {
    link: getLink(Platform.StackOverflow),
  },
};
