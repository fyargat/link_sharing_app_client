import { UILinks } from './ui/ui-links';

interface IProps {
  params: { id: string };
}

export const Links: React.FC<IProps> = ({ params }) => {
  return <UILinks id={params.id} />;
};
