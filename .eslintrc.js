module.exports = {
  env: {
    browser: true, // 브라우저 환경을 위한 설정
    es2021: true, // ES2021 문법을 위한 설정
    node: true, // Node.js 환경을 위한 설정
  },
  extends: [
    "eslint:recommended", // 기본 추천 설정
    "plugin:react/recommended", // React 추천 설정
    "plugin:prettier/recommended", // Prettier 추천 설정
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX 지원
    },
    ecmaVersion: 12, // ECMAScript 2021
    sourceType: "module", // ES 모듈 사용
  },
  plugins: [
    "react", // React 플러그인
    "prettier", // Prettier 플러그인
  ],
  rules: {
    "no-unused-vars": "warn", // 사용되지 않는 변수 경고
    "no-console": "off", // console.log 허용
    "react/prop-types": "off", // PropTypes 사용 안함
    "prettier/prettier": "error", // Prettier 규칙을 ESLint 오류로 표시
  },
  settings: {
    react: {
      version: "detect", // 설치된 React 버전 자동 감지
    },
  },
  ignorePatterns: ["public/*.html"], // HTML 파일 무시
};
