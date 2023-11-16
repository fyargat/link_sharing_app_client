import type { Meta, StoryObj } from '@storybook/react';

import { ICONS } from '@/src/shared/config/icons';
import { TextFieldDirection, UITextField } from '@/src/shared/ui/ui-text-field';

const meta = {
  title: 'UI/TextField',
  component: UITextField,
  parameters: {},
  tags: ['autodocs'],
  args: {
    error: undefined,
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UITextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    inputProps: {
      placeholder: 'Enter your email',
      type: 'email',
    },
    label: 'Email address',
    icon: ICONS['email'],
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    icon: ICONS['password'],
    inputProps: {
      placeholder: 'Enter your password',
      type: 'password',
    },
  },
};

export const Link: Story = {
  args: {
    inputProps: {
      placeholder: 'e.g. https://github.com/test',
    },
    label: 'Link',
    icon: ICONS['link'],
  },
};

export const RowDirection: Story = {
  args: {
    inputProps: {
      placeholder: 'e.g. https://github.com/test',
    },
    label: 'Link',
    icon: ICONS['link'],
    direction: TextFieldDirection.Row,
  },
};

export const RowDirectionWithInvalid: Story = {
  args: {
    inputProps: {
      placeholder: 'e.g. https://github.com/test',
    },
    label: 'Link',
    icon: ICONS['link'],
    direction: TextFieldDirection.Row,
    error: {
      message: 'Invalid message',
      type: 'required',
    },
  },
};

export const Invalid: Story = {
  args: {
    inputProps: {
      placeholder: 'e.g. https://github.com/test',
    },
    label: 'Link',
    icon: ICONS['link'],
    error: {
      message: 'Invalid message',
      type: 'required',
    },
  },
};
