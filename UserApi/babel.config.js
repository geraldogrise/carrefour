module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],

   
  plugins: [
    ['module-resolver', {
      alias: {
        "@controllers": "./src/1 - Services/Controllers",
        "@swagger": "./src/1 - Services/Configuration/Swagger/Models",
        "@models": "./src/2 - Application/Models",
        "@apps": "./src/2 - Application/Apps",
        "@iapps": "./src/2 - Application/Interfaces",
        "@aggregates": "./src/3 - Domain/Aggregates",
        "@irepository": "./src/3 - Domain/Interfaces/*",
        "@repository": "./src/4 - Infra/4.1 - Data/Repository",
        "@context": "./src/4 - Infra/4.1 - Data/Context",
        "@idata": "./src/4 - Infra/4.1 - Data/Interfaces",
        "@core": "./src/4 - Infra/4.1 - Data/Core",
        "@ioc": "./src/4 - Infra/4.2 - Crosscutting/CrossCuttingIoc",
      }
    }],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { 'legacy': true }],
    "babel-plugin-parameter-decorator"

  ],
  ignore: [
    '**/*.spec.ts'
  ]
}