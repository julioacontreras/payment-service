module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: [
        'js',
        'ts'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
        '^.+\\.(j|t)sx?$': 'ts-jest'
    },
    transformIgnorePatterns: [
        'node_modules/(?!variables/.*)'
    ],    
    verbose: true
};
