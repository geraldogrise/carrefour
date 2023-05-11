module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
   moduleNameMapper: {
    "@controllers/(.*)": ["<rootDir>/src/1 - Services/Controllers/$1"],
    "@swagger/(.*)": ["<rootDir>/src/1 - Services/Configuration/Swagger/Models/$1"],
    "@models/(.*)": ["<rootDir>/src/2 - Application/Models/$1"],
    "@apps/(.*)": ["<rootDir>/src/2 - Application/Apps/$1"],
    "@iapps/(.*)": ["<rootDir>/src/2 - Application/Interfaces/$1"],
    "@aggregates/(.*)": ["<rootDir>src/3 - Domain/Aggregates/$1"],
    "@irepository/(.*)": ["<rootDir>/src/3 - Domain/Interfaces/$1"],
    "@repository/(.*)": ["<rootDir>/src/4 - Infra/4.1 - Data/Repository/$1"],
    "@context/(.*)": ["<rootDir>/src/4 - Infra/4.1 - Data/Context/$1"],
    "@core(.*)": ["<rootDir>/src/4 - Infra/4.1 - Data/Core/$1"],
    "@ioc/(.*)": ["<rootDir>/src/4 - Infra/4.2 - Crosscutting/CrossCuttingIoc/$1"]
  }
};