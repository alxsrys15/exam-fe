/** @type {import('prettier').Config} */
module.exports = {
    arrowParens: 'avoid',
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    importOrder: [
      '^(react/(.*)$)|^(react$)',
      'next',
      '^(next/(.*)$)',
      '<THIRD_PARTY_MODULES>',
      '',
      '^types$',
      '^@/server/(.*)$',
      '^(@/components/(.*)$)|^(@/components$)',
      '^@/utils/(.*)$',
      'pages/(.*)$',
      '^[./]',
    ],
    importOrderSeparation: false,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
    semi: true
  };