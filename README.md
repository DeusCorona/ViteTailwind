# ViteTailwind

Playing with new React javascript build tool, performance is considerably better than traditional Webpack.

## Generating new Vite project:

* npm create vite@latest
* Select from the list of templates ( in this case React javasctipt )
* npm install ( installs all of the Node dependencies )
* npm run dev ( starts dev server on localhost )

## Configuring tailwindcss:

* npm install -D tailwindcss postcss autoprefixer
* npx tailwindcss init -p
* The content setup can be found under tailwind.config.cjs content bracket, we're using setup for Vite boilerplate scaffolding
* Custom colors should be added under tailwind.config theme -> extend -> colors, https://www.youtube.com/watch?v=6yFazMin-d0&ab_channel=PixelRocket