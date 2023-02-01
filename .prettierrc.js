module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: false,
  trailingComma: "all",
  // jsxBracketSameLine: true,
  bracketSpacing: true,
  // bracketLine: true,
  // "importOrder": ["^react(.*)", "antd/(.*)", "<THIRD_PARTY_MODULES>", "@/(.*)", "^[./]"],
  // "importOrderSeparation": true
  importOrder: ["^src/components/(.*)$", "^src/redux/(.*)$", "^src/ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
