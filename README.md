#LMS Frontend

### Setup instructions
1. clone the project
```
    git clone https://github.com/Krishna-cse/LMS-Frontend-pw.git
```
2. Move to the root directory
```
   cd lms-frontend-pw
```

3. install dependencies
```
    npm i __
```

4. run the server
```
    npm run dev
```

### setup instructions for the Tailwind css

[Tailwind official instuction doc](https://tailwindcss.com/docs/installation)

1. Install Tailwind css
```
    npm install -D tailwindcss
```

2. Create tailwind config file
```
    npx tailwindcss init
```

3. Add file extensions to tailwind config file in the content property
```
   content =  ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
```

4. Add the tailwind directives at the top of the `index.css` file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
5. Add the following details in the plugins property of tailwind config 

```
[require("daisyui"), require("@tailwindcss/line-clamp")]
```
### Adding plugins and dependencies

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint

1. Install simple import sort
```
    npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`
```
    'simple-import-sort/imports': 'error'
```

3. Add simple-import-sort plugin in `.eslint.cjs`
```
     plugins: [...(old plugins),'simple-import-sort'],
 
```

4. To enable auto import sort on file save in vscode
```
    -Open `setting.json`
    -Add the following config

     "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }

```