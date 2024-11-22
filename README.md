## MiniGaT Page

`https://jaronhel.github.io/MiniGaT/`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

How to build:
- Delete old `docs` folder
- `ng b --output-path docs --base-href /MiniGaT/`
- Copy the files in `docs/browser` into `docs` and delete `browser` folder
- `git add .`
- `git commit -m "build"`
- `git push`

Important notes:
- Make sure to be on the right branch
- If you encounter a fetch error use `git fetch`
