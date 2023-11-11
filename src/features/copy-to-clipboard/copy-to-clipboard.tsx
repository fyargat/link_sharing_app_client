'use client';

import { useCopyToClipboard } from './copy-to-clipboard.model';
import { UICopyToClipboardButton } from './ui/ui-copy-to-clipboard-button';

interface IProps {}

export const CopyToClipboard: React.FC<IProps> = () => {
  const { text, onCopy } = useCopyToClipboard();

  return <UICopyToClipboardButton text={text} onCopy={onCopy} />;
};
