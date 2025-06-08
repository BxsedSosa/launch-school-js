import { defineConfig } from "eslint/config";
import globals from "globals";
import babelParser from "babel-eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended"),

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
            ...globals.jquery,
            ...globals.node,
            alert: true,
            define: true,
            document: true,
            global: true,
            location: true,
            require: true,
            window: true,
            Handlebars: true,
            BigInt: true,
        },

        parser: babelParser,
        ecmaVersion: 5,
        sourceType: "commonjs",

        parserOptions: {
            ecmaFeatures: {
                impliedStrict: true,
            },
        },
    },

    rules: {
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "arrow-spacing": "error",
        "block-scoped-var": "error",

        "brace-style": ["error", "1tbs", {
            allowSingleLine: true,
        }],

        camelcase: "error",
        complexity: "error",
        "consistent-return": "error",
        "constructor-super": "error",
        eqeqeq: "error",

        "id-length": ["error", {
            exceptions: ["_", "a", "b", "x", "y", "z"],
            min: 2,
            properties: "never",
        }],

        indent: ["error", 2, {
            SwitchCase: 1,
        }],

        "keyword-spacing": "error",
        "linebreak-style": "error",
        "max-depth": "error",

        "max-len": ["error", {
            code: 80,
            tabWidth: 2,
            ignoreRegExpLiterals: false,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        }],

        "max-lines-per-function": ["error", {
            max: 20,
            skipBlankLines: true,
            skipComments: true,
        }],

        "max-nested-callbacks": ["error", {
            max: 4,
        }],

        "max-statements": ["error", {
            max: 15,
        }, {
            ignoreTopLevelFunctions: true,
        }],

        "max-statements-per-line": "error",
        "new-parens": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-bitwise": "error",
        "no-buffer-constructor": "error",
        "no-caller": "error",
        "no-class-assign": "error",

        "no-confusing-arrow": ["error", {
            allowParens: true,
        }],

        "no-console": "off",
        "no-const-assign": "error",

        "no-constant-condition": ["error", {
            checkLoops: false,
        }],

        "no-debugger": "off",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inner-declarations": ["error", "both"],
        "no-iterator": "error",
        "no-label-var": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        "no-misleading-character-class": "error",
        "no-mixed-operators": "error",
        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-symbol": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-process-env": "error",
        "no-process-exit": "error",
        "no-prototype-builtins": "off",

        "no-restricted-syntax": ["error", {
            message: "Do not use `with` statement.",
            selector: "WithStatement",
        }],

        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",

        "no-self-assign": ["error", {
            props: true,
        }],

        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "error",

        "no-unused-vars": ["error", {
            args: "all",
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
            vars: "local",
        }],

        "no-use-before-define": ["error", {
            functions: false,
        }],

        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-with": "error",
        "nonblock-statement-body-position": "error",
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "prefer-promise-reject-errors": "error",
        "quote-props": ["error", "consistent-as-needed"],
        radix: "error",
        "require-await": "error",
        "require-yield": "error",

        semi: ["error", "always", {
            omitLastInOneLineBlock: true,
        }],

        "semi-spacing": "error",
        "semi-style": "error",
        "space-before-blocks": "error",
        "space-infix-ops": "error",

        "space-unary-ops": ["error", {
            words: true,
            nonwords: false,
        }],

        "vars-on-top": "error",
    },
}]);