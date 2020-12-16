## 0. 概要

Next.jsでのユニットテスト環境を整えます。
使用するライブラリは`Jest`と`React Testing Library`です。

## 1. まずは作業用のリポジトリを作成
```bash
❯ yarn create next-app next-test --example=with-typescript
```

## 2. テスト用のライブラリをインストール

```bash
> yarn add -D jest @types/jest babel-jest @testing-library/react @testing-library/jest-dom identity-obj-proxy
```

## 3. Jestの設定を作成
2ファイル作成します。

- jest.config.jsの作成
- .babelrcの作成

jest.config.jsの作成

```js
module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
};

```

`.babelrc`の作成

```.babelrc
{
  "presets": ["next/babel"]
}

```

## 4. サンプルとしてButtonコンポーネントを作成

以下のコミットを参照してください。

https://github.com/hiroshi-kato/next-test/commit/01d8b9a61b856bad11b8139bba24b333a2791763

テストの書き方は以下の記事が大変参考になりました。
- [React Testing Libraryの使い方 - Qiita](https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f)
- [React Testing Library の使い方 - Adwaysエンジニアブログ](https://blog.engineer.adways.net/entry/2020/06/12/150000)

## 5. 動作確認

`yarn test`でテスト実行。

以下のような実行ログが出ればOK。

```
> yarn run v1.22.10
$ jest
 PASS  src/components/Button/index.test.tsx
  Button
    Button
      ✓ should be render button with label (28 ms)
      ✓ shoud be fired handleClick when button clicked (7 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.41 s
Ran all test suites.
✨  Done in 2.10s.
```

以上。

## 6. 参考記事
- [next.js/examples/with-typescript-eslint-jest at master · vercel/next.js · GitHub](https://github.com/vercel/next.js/tree/master/examples/with-typescript-eslint-jest)
- [Jest · 🃏 Delightful JavaScript Testing](https://jestjs.io/)
- [GitHub - testing-library/jest-dom: Custom jest matchers to test the state of the DOM](https://github.com/testing-library/jest-dom)
- [React Testing Library | Testing Library](https://testing-library.com/docs/react-testing-library/intro)
