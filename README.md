# Insomnia json file template tag 
This plugin changes content of json file if keywords match with environment variables

Compulsory environment variable used by this insomnia plugin is **json_property** has json structure:

```
{
"json_property": {
    "version": "1.0"
  }
}
 ```
 
 ### To install plugin manually
  1) Checkout this repository;
  2) Copy source code to insomnia plugins directory(see paths below);
  3) Create environment variables(see structure above) with your values; 
  
  - ___MacOS_:__ ~/Library/Application\ Support/Insomnia/plugins/
  
  - _**Windows**_: %APPDATA%\Insomnia\plugins\
  
  - _**Linux**_: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/
  
  
  ### Todos
   - Write Tests
   - Publish plugin to [npm](https://www.npmjs.com/)