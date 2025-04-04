import antfu from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'

type Options = Parameters<typeof antfu>[0]
type UserConfigs = Parameters<typeof antfu>[1][]

const VuePackages = [
    'vue',
    'nuxt',
    'vitepress',
    '@slidev/cli',
]

const defaultOptions: Options = {
    yaml: false,
    markdown: true,
    typescript: isPackageExists('typescript'),
    vue: VuePackages.some(i => isPackageExists(i)),
    stylistic: {
        indent: 4,
    },
    formatters: {
        html: true,
        css: true,
        markdown: true,
    },
    lessOpinionated: true,
}

export function maxchang(
    options?: Options,
    ...userConfigs: UserConfigs
): ReturnType<typeof antfu> {
    const withDefaults = { ...defaultOptions, ...options }

    let factory = antfu(withDefaults, ...userConfigs)
        .override('antfu/jsdoc/rules', {
            rules: {
                'jsdoc/require-returns-description': 'off',
            },
        })
        .override('antfu/javascript/rules', {
            rules: {
                'curly': 'off',
                'no-console': 'off',
                'antfu/top-level-function': 'off',
            },
        })

    if (options?.typescript ?? true) {
        factory = factory.override('antfu/typescript/rules', {
            rules: {
                'ts/explicit-function-return-type': 'off',
                'ts/method-signature-style': ['error', 'method'],
            },
        })
    }

    if (options?.stylistic ?? true) {
        factory = factory.override('antfu/stylistic/rules', {
            rules: {
                'curly': 'off',
                'style/arrow-parens': 'off',
                'style/max-statements-per-line': 'off',
                'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            },
        })
    }

    if (options?.jsonc ?? true) {
        factory = factory.override('antfu/jsonc/rules', {
            rules: {
                'jsonc/indent': ['error', 2],
            },
        })
    }

    return factory
}
