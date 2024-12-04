# @maxchang/eslint-config

[![npm](https://img.shields.io/npm/v/@maxchang/eslint-config?color=444)](https://npmjs.com/package/@maxchang/eslint-config)

Max Chang's ESLint config preset, just a personalized version of [@antfu/eslint-config](https://github.com/antfu/eslint-config), for personal use.

See usage and more details in [@antfu/eslint-config](https://github.com/antfu/eslint-config).

## Usage

```bash
pnpm i -D eslint @maxchang/eslint-config
```

Create eslint.config.mjs in your project root:

```js
// eslint.config.mjs
import defineConfig from '@maxchang/eslint-config'

export default defineConfig()
```

## Convention

- Base on `@antfu/eslint-config`
- Auto fix for formatting, enable fomatters by default（HTML, CSS, Markdown）.
- Style principle: Minimal for reading, stable for diff, consistent
    - **4 spaces for indentation (except for JSON)**
    - Sorted imports, dangling commas
    - Single quotes, no semi
    - Using [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic)

## VSCode Config Reference

Auto fix on save & use eslint as formatter

See [.vscode/settings.json](./.vscode/settings.json)

# LICENSE

[MIT](./LICENSE)
