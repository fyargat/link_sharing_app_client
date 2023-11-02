import type { Meta, StoryObj } from '@storybook/react';

import { UINavbar } from '@/src/features/navbar';
import { UIPhoneTemplate } from '@/src/features/phone-template';
import { Route } from '@/src/shared/config/routes';
import { UIPageLayout } from '@/src/shared/ui/layouts/ui-page-layout';
import { UIHeader } from '@/src/shared/ui/ui-header';

const RightBlock = () => {
  return (
    <div
      style={{
        backgroundColor: 'tomato',
        height: '300vh',
        color: 'white',
        padding: '1rem',
      }}
    >
      Right Block
    </div>
  );
};

const meta = {
  title: 'UI/PageLayout',
  component: UIPageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UIPageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    header: <UIHeader navbar={<UINavbar route={Route.Home} />} />,
    left: (
      <UIPhoneTemplate
        links={[]}
        user={{
          avatar: '',
          email: '',
          fullName: '',
        }}
        linkSkeletons={Array(5).fill('_')}
      />
    ),
    right: <RightBlock />,
  },
};
