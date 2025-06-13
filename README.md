# Extension Paresseux

Paresseux est un exemple minimal d'extension de navigateur permettant de planifier des tâches récurrentes. Le planning est décrit dans un fichier JSON que l'utilisateur peut personnaliser.

## Installation des dépendances
1. Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé.
2. Depuis la racine du dépôt, exécutez :
   ```bash
   npm install
   ```

## Compilation
Pour générer la version de production :
```bash
npm run build
```
Les fichiers construits se trouvent dans le dossier `dist/` et peuvent être chargés comme extension non empaquetée.

## Configuration du planning
L'extension lit par défaut `work-schedule.json`. Vous pouvez modifier ce fichier ou en spécifier un autre via la page d'options.

1. Ouvrez la page d'options de l'extension.
2. Indiquez le chemin du fichier de planning ou modifiez les tâches via l'interface.
3. Enregistrez puis rechargez l'extension pour appliquer les changements.

## Guide de démarrage rapide
```bash
npm install
npm run dev
```
Chargez ensuite le dossier `dist/` dans votre navigateur pour tester l'extension.
