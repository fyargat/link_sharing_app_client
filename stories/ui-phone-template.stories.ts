import type { Meta, StoryObj } from '@storybook/react';

import { UIPhoneTemplate } from '@/src/features/phone-template';
import { Platform, platformMap } from '@/src/shared/config/platforms';
import { IShareLink } from '@/src/shared/types';

const links: IShareLink[] = [
  {
    platform: platformMap.get(Platform.Facebook)!,
    href: 'https://facebook.com/test',
  },
  {
    platform: platformMap.get(Platform.Gitlab)!,
    href: 'https://facebook.com/test',
  },
  {
    platform: platformMap.get(Platform.LinkedIn)!,
    href: 'https://facebook.com/test',
  },
  {
    platform: platformMap.get(Platform.FrontendMentor)!,
    href: 'https://facebook.com/test',
  },
  {
    platform: platformMap.get(Platform.Twitch)!,
    href: 'https://facebook.com/test',
  },
  {
    platform: platformMap.get(Platform.DevTo)!,
    href: 'https://facebook.com/test',
  },
  {
    platform: platformMap.get(Platform.Hashnode)!,
    href: 'https://facebook.com/test',
  },
];

const user = {
  avatar: '',
  email: '',
  fullName: '',
};

const linkSkeletons = Array(5).fill('_');

const meta = {
  title: 'UI/PhoneTemplate',
  component: UIPhoneTemplate,
  parameters: {},
  tags: ['autodocs'],
  args: {
    user,
    links: [],
    linkSkeletons,
  },
  argTypes: {},
} satisfies Meta<typeof UIPhoneTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    links: links.slice(0, 3),
    linkSkeletons: linkSkeletons.slice(0, 2),
  },
};

export const WithAvatar: Story = {
  args: {
    user: {
      ...user,
      avatar:
        'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
    },
  },
};

export const WithEmail: Story = {
  args: {
    user: {
      ...user,
      email: 'test@test.com',
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
  },
};

export const WithFullName: Story = {
  args: {
    user: {
      ...user,
      fullName: 'John Doe',
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
  },
};

export const FullInfo: Story = {
  args: {
    links: links.slice(0, 5),
    user: {
      avatar:
        'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
      email: 'test@test.com',
      fullName: 'John Doe',
    },
  },
};

export const MinLinks: Story = {
  args: {
    links: [],
  },
};

export const MaxLinks: Story = {
  args: {
    links: links.slice(0, 5),
    linkSkeletons: [],
  },
};

export const MoreLinks: Story = {
  args: {
    links,
    linkSkeletons: [],
  },
};
