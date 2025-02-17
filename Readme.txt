Le but de ce projet est de développer une API qui retourne au format JSON les headers de la requête lorsqu'une requête HTTP GET est effectuée sur "/ping". Le serveur écoute sur un port configurable via une variable d'environnement, ou utilise un port par défaut si la variable n'est pas définie, qui est ici le port 8000. Pour ce projet, j'ai décidé d'utiliser TypeScript.

Pour avoir le projet fonctionnel, il faut :

Cloner mon dépôt grâce à git avec la commande : git clone https://github.com/AdamAlvess/WIKI-DPS-TP01.git, puis se déplacer dedans avec cd WIKI-DPS-TP01.

Installer la dépendance de développement avec npm install.

Après ces étapes, le projet est bien initialisé et l'utilisation est très simple. Il suffit de lancer la commande suivante : npm start. Suite à cette commande, le serveur se lance sur le port voulu ou sur le port par défaut (port 8000).

Il vous suffit ensuite d'ouvrir le navigateur de votre choix et de saisir l'URL suivante : http://localhost:8000/ping.

Bonne expérience à vous !!!