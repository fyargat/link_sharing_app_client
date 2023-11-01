import { UINavbar } from '@/src/features/navbar';
import { Route } from '@/src/shared/config/routes';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Navbar',
  component: UINavbar,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UINavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    route: Route.Home,
  },
};

export const ProfileActive: Story = {
  args: {
    route: Route.Profile,
  },
};
