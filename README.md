## MiniGaT Page
- Official Page `jaron.zapto.org`

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
