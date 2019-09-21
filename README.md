# `eslint-typescript-node` demo

This repository is a small demo on how to use [eslint](https://eslint.org/), [prettier](https://prettier.io), [commitlint](https://commitlint.js.org), [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) to put together a pre-commit workflow to sanitize your code.

For this demo, we are using [airbnb's eslint base config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) to maintain a consistent code-style in the codebase.

When used in modern IDEs or script editors, the linting/formatting functions can be enabled on-save to format the current file. Otherwise, the `pre-commit` and `commit-msg` git hooks will be used to format all the relevant staged files, and also make sure the commit messages follow [conventional commit specifications](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).
