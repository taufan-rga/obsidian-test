const IS_PROD = !__DEV__;

type LoggerType = 'error' | 'info' | 'success' | 'location';

function signEmoji(type: LoggerType) {
  switch (type) {
    case 'error':
      return '🔥 ';

    case 'info':
      return '⚠️ ';

    case 'success':
      return '✅ ';

    case 'location':
      return '📌 ';

    default:
      return '';
  }
}

export default function logging(
  payload: any,
  extra: any = null,
  type: LoggerType = 'info',
  location?: string,
): void | undefined {
  const emoji = signEmoji(type);
  if (IS_PROD) return;
  if (location) logging(location, '', 'location');
  if (extra) return console.log(`${emoji} ${payload}`, extra);
  return console.log(emoji, payload);
}
