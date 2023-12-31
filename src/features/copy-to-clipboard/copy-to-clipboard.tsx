'use client';

import { useCopyToClipboard } from './copy-to-clipboard.model';
import { UICopyToClipboardButton } from './ui/ui-copy-to-clipboard-button';

interface IProps {}

export const CopyToClipboard: React.FC<IProps> = () => {
  const { copyText, onCopy } = useCopyToClipboard();

  return <UICopyToClipboardButton text={copyText} onCopy={onCopy} />;
};
