# frontend-football-mix
[ARGO TASK FOR IP] Init Github Repository
Description	
    Requirements:

    1. Repository name -> frontend-football-mix
    2. Install React typescript with Vite (no need unit test dependencies)
    3. Install Tailwind css v3 as common css
    4. Invite repository contributors Argo and Revy

Answer : 
    1. go to Github, create new repository
    2. 
        - npm create vite@latest
        -- choose react, then typescript
        - npm install
        - npm run dev (optional)
    3. 
        - npm install -D tailwindcss postcss autoprefixer
        - npx tailwindcss init -p
        - tailwind.config.js :
            content: [
                "./src/**/*.{js,jsx,ts,tsx}",
            ],
        - src/index.css : 
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
    4. npm run dev (optional)