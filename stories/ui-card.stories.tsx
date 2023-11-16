import type { Meta, StoryObj } from '@storybook/react';

import { Platform } from '@/src/shared/config/platforms';
import { IShareLink, IUserView } from '@/src/shared/types';
import { UICard } from '@/src/shared/ui/ui-card';

const CopyToClipboard = () => <button>Copy Clipboard Button</button>;

const getLink = (platformId: Platform, id: number) => {
  return { id, ownerId: 1, platformId, text: '' };
};

const user: IUserView = {
  fullName: 'John Doe',
  email: 'test@test.test',
  avatar:
    'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
};

const links: IShareLink[] = [
  getLink(Platform.Facebook, 1),
  getLink(Platform.Gitlab, 1),
  getLink(Platform.LinkedIn, 1),
  getLink(Platform.FrontendMentor, 1),
  getLink(Platform.Twitch, 1),
  getLink(Platform.Hashnode, 1),
  getLink(Platform.Gitlab, 1),
  getLink(Platform.Youtube, 1),
];

const meta = {
  title: 'UI/Card',
  component: UICard,
  parameters: {},
  tags: ['autodocs'],
  args: {
    user,
    links,
  },
  argTypes: {},
} satisfies Meta<typeof UICard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const EmptyUser: Story = {
  args: {
    user: {
      fullName: '',
      email: '',
      avatar: '',
    },
  },
};

export const WithoutEmail: Story = {
  args: {
    user: {
      ...user,
      email: '',
    },
  },
};

export const WithLongEmail: Story = {
  args: {
    user: {
      ...user,
      email:
        'test-test-test-test-test-test-test-test-test-test-test-test-test@test.com',
    },
    links: [],
  },
};

export const WithoutFullName: Story = {
  args: {
    user: {
      ...user,
      fullName: '',
    },
  },
};

export const WithLongFullName: Story = {
  args: {
    user: {
      ...user,
      fullName:
        'John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe',
    },
    links: [],
  },
};

export const NoLinks: Story = {
  args: {
    links: [],
  },
};

export const WithCopyButton: Story = {
  args: {
    copyButton: <CopyToClipboard />,
  },
};
