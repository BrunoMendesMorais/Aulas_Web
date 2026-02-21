# Aulas de Programação Web - 2026
---
## Aula 2
### Introdução a versionamento
Comandos para configuração de usario e email
```
git config --global user.name "seuNomeGitHub"
git config --global user.email "seuEmail"

//verificar configurações

git config user.name
git config user.email
```
Comandos para clonar repositório
```
git clone link_do_repositório
```
Comandos de para commit
```
git add .
git commit -m"mensagem de commit"
git push oringin branch
```
Comando para manipulação de remotes
```
git remote remove origin
git remote add apelido link_do_repositório_remoto
```
Comandos para Checkout Seletivo
```
git config core.sparseCheckout true
echo "books/*" > .git/info/sparse-checkout
```
Comandos para fazer Download dos Dados
```
git fetch
git checkout livros/main -- books
```
---
## Aula 3
* Instalação do TypeScrip
* Uso do ts-note
* Criação do primeiro programa em TypeScript
* Tipos de variaveis
* Operadores
* Condicionais
* Listas
* Loops