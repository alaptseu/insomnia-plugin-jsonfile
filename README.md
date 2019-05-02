# Insomnia json file template tag 
This plugin changes content of json file if keywords match with environment variables

Environment variable used by this insomnia plugin is **json_property** has json structure:

```
{
"json_property": {
    "key1": "value1",
    "key2": "value2"
  }
}
 ```
Each json_property environment variable key should match the property key from json file,
property value will be changed to the one from environment variable value.
The original imported file won't be modified unless _'Save changed file content'_ checkbox is enabled.
 
If no **json_property** provided the file content will be imported as is. 

Json file content editing is done using [edit-json-file](https://www.npmjs.com/package/edit-json-file) library.
 
 ### To install plugin manually
  1) Checkout this repository;
  2) Copy source code to insomnia plugins directory(see paths below);
  3) Create environment variables(see structure above) with your values; 
  
  - _**MacOS**_: ~/Library/Application\ Support/Insomnia/plugins/
  
  - _**Windows**_: %APPDATA%\Insomnia\plugins\
  
  - _**Linux**_: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/
  
  
  ### Todos
   - ~~Write Tests~~
   - Publish plugin to [npm](https://www.npmjs.com/)
   - ~~Give the optional flag to rewrite the json file content~~