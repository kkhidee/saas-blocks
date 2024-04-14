module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
        "no-restricted-syntax": 0,
        "react/require-default-props": "off",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "off",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-tslint-comment": "error",
        "@typescript-eslint/no-inferrable-types": [
            0
        ],
        "@typescript-eslint/no-unused-vars": [
            2,
            {
                "args": "none"
            }
        ],
        "react/prop-types": [
            0
        ],
        "react/jsx-props-no-spreading": "off",
        "react/function-component-definition": [
            1,
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ],
        "no-param-reassign": "off",
        "consistent-return": "off",
        "arrow-body-style": "off",
        "react/react-in-jsx-scope": "off",
        "react/no-array-index-key": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
            "error"
        ],
        "react/jsx-filename-extension": [
            "warn",
            {
                "extensions": [
                    ".tsx"
                ]
            }
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never",
                "tsx": "never"
            }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "import/prefer-default-export": "off",
        "global-require": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": [
            "error"
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true,
                "optionalDependencies": true,
                "peerDependencies": true
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
}
