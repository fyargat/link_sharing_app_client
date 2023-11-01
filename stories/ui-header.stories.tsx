import { UINavbar } from '@/src/features/navbar';
import { Route } from '@/src/shared/config/routes';
import { UIHeader } from '@/src/shared/ui/ui-header';
import type { Meta, StoryObj } from '@storybook/react';

const Center = () => <p>Center</p>;
const Right = () => <p>Right</p>;

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
    center: <Center />,
    right: <Right />,
  },
};

export const WithNavbar: Story = {
  args: {
    center: <UINavbar route={Route.Profile} />,
    right: <Right />,
  },
};
