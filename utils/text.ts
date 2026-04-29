import { Tool } from '../types';

const MOJIBAKE_MARKERS = [
  '�',
  '馃',
  '鈥',
  '锛',
  '銈',
  '鐨',
  '褌',
  '谐',
  'del',
  'pл',
];

export const looksCorruptedText = (value?: string): boolean => {
  if (!value) return false;
  return MOJIBAKE_MARKERS.some(marker => value.includes(marker));
};

export const getSafeLocalizedDescription = (tool: Tool, language: string): string => {
  const localized = tool.descriptions?.[language];
  return localized && !looksCorruptedText(localized) ? localized : tool.description;
};
