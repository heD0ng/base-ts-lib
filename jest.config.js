module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage', // 输出覆盖率报告的目录
    coverageReporters: ['text', 'lcov'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: [
        '**/?(*.)+(spec|test).ts', // 匹配 .test.ts 或 .spec.ts 文件
        '**/tests/**/*.test.ts', // 如果你的测试文件放在 tests 目录下
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    testPathIgnorePatterns: ['/node_modules/', '/lib/'],
};
