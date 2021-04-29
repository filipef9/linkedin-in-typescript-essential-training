# linkedin-in-typescript-essential-training
Repositório de acompanhamento do curso **Typescript Essential Training** da plataform **Linkedin Learning**.

## Instalar typings

1. Install typings.
    ```bash
    $ npm install --save-dev typings
    ```
1. Run this command to download the definition and save the file **typings.json**.
    ```bash
    $ ./node_modules/.bin/typings install dt~jquery --global --save
    ```
1. Add the dir **typings** to **.gitignore**.
1. Run this command to download the definitions from the file **typings.json**.
    ```bash
    $ ./node_modules/.bin/typings install dt~jquery --global
    ```