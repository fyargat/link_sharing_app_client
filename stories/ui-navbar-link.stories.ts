import { ICONS } from '@/src/shared/config/icons';
import { Route } from '@/src/shared/config/routes';
import { UINavbarLink } from '@/src/shared/ui/ui-navbar-link';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/NavbarLink',
  component: UINavbarLink,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof UINavbarLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    href: Route.Home,
    isActive: false,
    icon: ICONS['link'],
    text: 'Links',
  },
};

export const Active: Story = {
  args: {
    href: Route.Preview,
    isActive: true,
    icon: ICONS['profile'],
    text: 'Profile',
  },
};
