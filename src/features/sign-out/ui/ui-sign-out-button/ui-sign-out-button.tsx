import { FC } from 'react';

interface IProps {
  onSignOut: () => void;
  isLoading: boolean;
}

export const UISignOutButton: FC<IProps> = ({ onSignOut, isLoading }) => {
  return (
    <button onClick={onSignOut} disabled={isLoading}>
      Sign Out
    </button>
  );
};
