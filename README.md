# open-pencil (Vibeclones mirror)

Hosted browser builds of [OpenPencil](https://github.com/open-pencil/open-pencil), an open-source design editor that opens `.fig` and `.pen` files, by the [open-pencil](https://github.com/open-pencil) team. The code is theirs; this repo only builds and hosts it. The project's own web app is at https://app.openpencil.dev.

- Latest: `/open-pencil/latest/`
- A specific version: `/open-pencil/v<version>/`, for example `/open-pencil/v0.16.0/`
- Version list: `/open-pencil/versions.json`

Each version is built from a stable upstream release tag (betas are skipped) with the project's own Vite build, using relative paths so it works from a subfolder. The lint step is skipped and the project's optional usage-ping flag is left off. A scheduled workflow builds new releases.

Upstream is licensed MIT. Every version folder includes the license and a `SOURCE.txt` naming the exact upstream tag it was built from.