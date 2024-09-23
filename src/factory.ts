import antfu from '@antfu/eslint-config'

type Options = Parameters<typeof antfu>[0]
type UserConfigs = Parameters<typeof antfu>[1][]

const defaultOptions: Options = {
    yaml: false,
    markdown: true,
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

    const factory = antfu(withDefaults, ...userConfigs)

        .override('antfu/javascript/rules', {
            rules: {
                'curly': 'off',
                'no-console': 'off',
            },
        })

        .override('antfu/stylistic/rules', {
            rules: {
                'curly': 'off',
                'style/arrow-parens': 'off',
                'style/max-statements-per-line': 'off',
                'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            },
        })

        .override('antfu/typescript/rules', {
            rules: {
                'ts/explicit-function-return-type': 'off',
                'ts/method-signature-style': ['error', 'method'],
            },
        })

        .override('antfu/jsonc/rules', {
            rules: {
                'jsonc/indent': ['error', 2],
            },
        })

        .override('antfu/jsdoc/rules', {
            rules: {
                'jsdoc/require-returns-description': 'off',
            },
        })

    return factory
}
