import { ICONS } from '@/src/shared/config/icons';
import { Direction, UIInput } from '@/src/shared/ui/ui-input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Input',
  component: UIInput,
  parameters: {},
  tags: ['autodocs'],
  args: {
    isInvalid: false,
  },
  argTypes: {},
} satisfies Meta<typeof UIInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    placeholder: 'Enter your email',
    label: 'Email address',
    icon: ICONS['email'],
    type: 'email',
    errorText: "Can't be empty",
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter your password',
    label: 'Password',
    icon: ICONS['password'],
    type: 'password',
    errorText: 'Please check again',
  },
};

export const Link: Story = {
  args: {
    placeholder: 'e.g. https://github.com/test',
    label: 'Link',
    icon: ICONS['link'],
    errorText: "Can't be empty",
  },
};

export const RowDirection: Story = {
  args: {
    placeholder: 'e.g. https://github.com/test',
    label: 'Link',
    icon: ICONS['link'],
    errorText: "Can't be empty",
    direction: Direction.Row,
  },
};

export const RowDirectionWithInvalid: Story = {
  args: {
    placeholder: 'e.g. https://github.com/test',
    label: 'Link',
    icon: ICONS['link'],
    errorText: "Can't be empty",
    direction: Direction.Row,
    isInvalid: true,
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'e.g. https://github.com/test',
    label: 'Link',
    icon: ICONS['link'],
    errorText: "Can't be empty",
    isInvalid: true,
  },
};
