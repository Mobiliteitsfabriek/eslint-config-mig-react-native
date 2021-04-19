# eslint-config-mig-react-native

This package provides MIG's .eslintrc as an extensible shared config for React Native projects.

## Goal

By using this shared package as a basis for every React Native project developed and/or maintained within the MIG we can ensure our code styling matches across those projects. This will make cooperation between teams easier.

- Use this package in any new React Native project.
- Communicate this package to any external developers creating a React Native app for us. We will have an easier time taking over the codebase when that time comes.
- Use this repository as a platform to discuss code styling and propose changes to the linting rules. This way we can learn from each other and create a history of rationales behind our code style choices.

## Installation

Add the package as a development dependency:

```bash
yarn add -D eslint-config-mig-react-native
```

Install the package peer dependencies as development depency (if you don't have them allready).

```bash
yarn add -D eslint eslint-config-prettier eslint-plugin-detox eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks prettier
```

## ESLint configuration

Extend `mig-react-native` in your `eslintrc.js` (create it if you didn't have it already)

```js
module.exports = {
  extends: ['mig-react-native'],
  rules: {
    // Add project-specific rule overrides here
  },
}
```

## Prettier and TypeScript configuration

To make eslint play nice with Prettier and TypeScript we need to define matching configuration for them;

- Copy `.prettierrc` from this package to your project's root folder.
- Copy `tsconfig.json` from this package to your project's root folder.
- Update the `include` array in your `tsconfig.json` with all directory patterns you want to have TypeScript files linted in. Note that while you could just add `"*.ts"` and `"*.tsx"` this will probably slow down your linting considerably.

If you already have these configuration files, and replacing them gives you

## Existing codebases

When we adopt an existing codebase that does not build on our shared linting configuration, we should apply it and refactor as required. Of course this can be a very big task that potentially touches every part of the application. Not ideal, especially when the codebase is relatively new for the team.

Instead, we should aim towards unification in the long run. But how do we spread such a task out without postponing it forever? The following steps are a suggestion of how to approach this project:

1. Add the package and it's peer dependencies.
2. Copy the current project specific rules from the `eslintrc` somewhere so you can check on them.
3. Replace the existing `eslintrc` config with the above template.
4. Run the linter (you'll probably get a lot of errors).
5. For every error, decide if it is a project specific exception or something that should be refactored in the future, then copy the lint rule name and add a project specific rule that:

- Either has a comment with a reason for overriding the standard. For example:

```js
//  4:9  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

rules: {
  // This project has a lot of methods that should explicitly deal with ANY type of input
  '@typescript-eslint/no-explicit-any': 'off',
},
```

- Or results in a warning instead of an error with a TODO comment. For example:

```js
//  53:1  error  This line has a length of 126. Maximum allowed is 120  max-len

rules: {
  // TODO: clean up codebase to use 120 and remove this rule
  'max-len': 'warn',
},
```

6. Use the warnings to ensure the correct code style is used with any new features and changes.
7. One by one, remove the custom rules and refactor the codebase as required. You could create stories for each of them and plan in one or two every sprint or whenever your team has time to work on clearing technical debt.

## Publishing to npmjs.com

### prerequisites

You’ll need an account on npmjs.com and that has access to this package.
Account needs 2FA enabled for authorization & publishing.

### Step 1 - Create a new branch

Create a new branch in which you bump the version and use the following naming convention:

```
version/1.2.3
```

### Step 2 - Bump version

In your new branch you'll also need to update [CHANGELOG.md](https://github.com/Mobiliteitsfabriek/eslint-config-mig-react-native/blob/main/CHANGELOG.md). Move everything from [Unreleased] to the new version that you're creating. Using `npm version` you can bump the version.

```
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]
```

Push your new branch and create a PR, **wait for it being approved and merged before proceeding with the next steps.**

### Step 3 - Create draft release

Go to [releases](https://github.com/Mobiliteitsfabriek/eslint-config-mig-react-native/releases) and create a new draft release. Make sure the version number is the same as in step 1! In here you can also edit the release note and publish it.

### Step 4 - publish!

Once you've published the draft release a github workflow should kick off that will publish it on our [npmjs package](https://www.npmjs.com/package/eslint-config-mig-react-native)

## Contribution

As stated in the Goals, this repository can be used as a platform to discuss and update our codestyling configuration. If you have a proposal:

1. Open a PR with the proposed changes to `eslintrc.js`.
2. Use the PR body to add context to your proposed changes:

- What is the reason for suggesting this change?
- What is the impact of this change?
- Add links to resources or other information on this topic if you have them. It will be easier to discuss the proposed change when others won't have to do a lot of the research you probably already did.

3. Reply to questions or comments to your proposal.

When a proposed change is accepted by a majority of React Native developers in the MIG, it will be merged and a new version will be released.

**This should go without saying, but please be productive and polite when discussing proposed changes. These configurations are inherently based on preferences and concensus.**
