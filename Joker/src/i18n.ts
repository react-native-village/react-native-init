export enum I18N {
  TextStorybookBase,
}

export function getText(key: I18N, params?: Record<string, string>): string {
  let str = en[key];
  if (params) {
    return Object.entries(params).reduce(
      (memo, [k, v]) => memo.replace(`{{${k}}}`, v),
      str,
    );
  }
  return str;
}

const en: Record<I18N, string> = {
  [I18N.TextStorybookBase]: 'Your recovery phrase',
};
