import { Route } from '@/src/shared/config/routes';
import { UIPageLayout } from '@/src/shared/ui/layouts/ui-page-layout';
import { UIHeader } from '@/src/shared/ui/ui-header';
import { UINavbar } from '@/src/shared/ui/ui-navbar';
import { UIPhoneTemplate } from '@/src/shared/ui/ui-phone-template';
import type { Meta, StoryObj } from '@storybook/react';

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
    header: (
      <UIHeader center={<UINavbar route={Route.Home} />} right={<p>Right</p>} />
    ),
    left: <UIPhoneTemplate links={[]} avatar={''} email={''} fullName={''} />,
    right: <RightBlock />,
  },
};
