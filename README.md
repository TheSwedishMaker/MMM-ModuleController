# MMM-ModuleController
A MagicMirror module to hide other modules 

Clone repo 
git clone https://github.com/TheSwedishMaker/MMM-ModuleController 

include following in your config.js 

```bash
{
  module: 'MMM-ModuleController',
},
```

To hide other modules just add the following code to your project. Add the module you want to show to the exceptionList. 

```bash
        this.sendNotification('HIDE_MODULES', { exceptionList: ["MMM-DrawingBoard"] });
```

To show all modules

```bash
            this.sendNotification('SHOW_MODULES');
```

Made to run with MMM-Calculator and MMM-DrawingBoard. 
