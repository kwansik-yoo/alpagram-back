<h1> Project Configuration </h1>   


## Dependencies    

```bash
yarn init
yarn add express       
yarn add -D typescript @types/node @types/express ts-node  
npx tsc --init     
npm init @eslint/config
```

## tsconfig      
```json
{
  "compilerOptions": {
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
  }
}
```

## package.json   

```json
{
  "scripts": {
    "start": "ts-node src/app.ts"
  }
}
```

## app.ts       

