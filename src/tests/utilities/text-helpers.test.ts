import { trimText } from '../../utils/text-helpers';

test('Long text gets trimmed', () => {
  const fullText = 'This is really long text';
  const trimmedText = trimText(7, fullText);
  expect(trimmedText).toBe('This is...');
});
