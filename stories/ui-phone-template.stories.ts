import { Platform, platformMap } from '@/src/shared/config/platforms';
import { ILink } from '@/src/shared/types';
import { UIPhoneTemplate } from '@/src/shared/ui/ui-phone-template';
import type { Meta, StoryObj } from '@storybook/react';

const links: ILink[] = [
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

const meta = {
  title: 'UI/PhoneTemplate',
  component: UIPhoneTemplate,
  parameters: {},
  tags: ['autodocs'],
  args: {
    avatar: null,
    email: null,
    fullName: null,
    links: [],
  },
  argTypes: {},
} satisfies Meta<typeof UIPhoneTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    links: links.slice(0, 3),
  },
};

export const WithAvatar: Story = {
  args: {
    avatar:
      'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
  },
};

export const WithEmail: Story = {
  args: {
    email: 'test@test.com',
  },
};

export const WithLongEmail: Story = {
  args: {
    email:
      'test-test-test-test-test-test-test-test-test-test-test-test-test@test.com',
  },
};

export const WithFullName: Story = {
  args: {
    fullName: 'John Doe',
  },
};

export const WithLongFullName: Story = {
  args: {
    fullName:
      'John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe',
  },
};

export const FullInfo: Story = {
  args: {
    links: links.slice(0, 5),
    avatar:
      'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
    email: 'test@test.com',
    fullName: 'John Doe',
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
  },
};

export const MoreLinks: Story = {
  args: {
    links,
  },
};
