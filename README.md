# TP Noté

# Liste des patterns à analyser

## MVC

Ce design pattern est présent et nous l’avons partiellement implémenté car nous avons notre hook UseDialog qui sert de model. Néanmoins ce n’est pas totalement un MCV car les Controller sont au sein des states qui sont des listeners ou bien dans les balises HTML qui ont des action controller et qui interagissent avec le model

## Singleton

Ce design Pattern est présent dans notre solution. En effet, lorsque que nous appelons useDialog, c’est la même instance qui est appelé, peut importe où nous l’appelons dans notre projet. Néanmoins, ce n’est pas un singleton pur car nous pouvons créer plusieurs instance de useDialog si nous le souhaitons. Néanmoins, si nous voulons avoir plusieurs todo list dans notre application, alors le singleton ne serait plus approprié.

## Abstract Factory

Ce pattern est compatible dans notre solution, en effet, nous pouvons imaginer avoir plusieurs implémentation du useDialog en fonction des listes que nous avons. Si dans l’avenir nous avions plusieurs todo list avec des tâches avec des structures différentes, ce design pattern peut être compatible, ou bien si nous voulons avoir plusieurs implémentation de notre todo list, par exemple une todo list pour les tâches personnelles et une autre pour les tâches professionnelles.

## Builder

Ce design pattern n’est pas compatible avec notre solution. En effet, nous n’avons pas de construction d’objet complexe. Nous avons un objet simple qui est la tâche et nous n’avons pas besoin de le construire de manière progressive (pas besoin d'étapes).

## Decorator

Nous pensons que ce pattern n’est pas compatible avec notre solution. En effet, nous devrions encapsuler notre gestionnaire de tâches afin que chaque sous-gestionnaire de tâche l’adapte à son contexte, ce qui veut dire que si nous voulons ajouter une tâche spécifique, alors nous allons ajouter une tâche à l’ensemble des gestionnaires de tâche que nous avons. Ce n’est pas le comportement attendu d’une todo list.

## Command

Nous pensons que ce deign pattern peut être compatible avec notre projet. En effet, si à l'avenir nous avons plusieurs boutons ou bien actions qui peut éffectuer les mêmes actions, alors nous pourrions encapsuler ces actions dans des commandes. Par exemple, si nous avons un bouton pour ajouter une tâche et un autre pour ajouter une tâche rapide, alors nous pourrions encapsuler ces actions dans des commandes.

## Observer

Ce design pattern est compatible avec notre projet. En effet, nous avons un état global qui est le useDialog et plusieurs composants qui écoutent cet état global. Par exemple, lorsque nous ajoutons une tâche, le composant qui affiche la liste des tâches est notifié et se met à jour automatiquement. Nous pouvons aussi imaginer un système de notification qui prévient l’utilisateur lorsqu’une tâche est ajoutée, supprimée ou modifiée et qui mettre à jour l’interface utilisateur en conséquence sur plusieurs composants.

## State

Nous pensons que ce design pattern est incompatible avec notre projet. En effet, dans notre situation notre todo list permet d’ajouter, de supprimer et de modifier l’état de celle-ci. Ce design pattern serait adapté si nous voulions changer les actions de cette todo list. Or ce n’est pas ce que nous voulons, une todo list doit fondamentalement garder ces fonctions ci. C’est pourquoi nous pensons que ce n’est pas un pattern compatible.