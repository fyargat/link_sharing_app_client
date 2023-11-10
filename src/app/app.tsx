import './index.scss';
import { AppProvider } from './provider';

export const App = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider>{children}</AppProvider>;
};
