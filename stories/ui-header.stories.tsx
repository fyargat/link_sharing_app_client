import type { Meta, StoryObj } from '@storybook/react';

import { UINavbar } from '@/src/features/navbar';
import { Route } from '@/src/shared/config/routes';
import { UIHeader } from '@/src/shared/ui/ui-header';

const meta = {
  title: 'UI/Header',
  component: UIHeader,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UIHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    right: <button>Right</button>,
    navbar: <UINavbar route={Route.Profile} />,
  },
};
