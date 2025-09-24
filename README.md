# TP Noté

# Liste des patterns à analyser

## MVC

Ce design pattern est présent et nous l’avons partiellement implémenté car nous avons notre hook UseDialog qui sert de model. Néanmoins ce n’est pas totalement un MCV car les Controller sont au sien des states qui sont des listeners ou bien dans les balises HTML qui ont des action controller et qui interagissent avec le model

## Singleton

Ce design Pattern est présent dans notre solution. En effet, lorsque que nous appelons useDialog, c’est la même instance qui est appelé, peut importe où nous l’appelons dans notre projet

## Abstract Factory

Ce pattern est compatible dans notre solution, en effet, nous pouvons imaginer avoir plusieurs implémentation du useDialog en fonction des listes que nous avons. Si dans l’avenir nous avions plusieurs todo list avec des tâches avec des structures différentes, ce design pattern peut être compatible. 

## Builder

## Decorator

Nous pensons que ce pattern n’est pas compatible avec notre solution. En effet, nous devrions encapsuler notre gestionnaire de tâches afin que chaque sous-gestionnaire de tâche l’adapte à son contexte, ce qui veut dire que si nous voulons ajouter une tâche spécifique, alors nous allons ajouter une tâche à l’ensemble des gestionnaires de tâche que nous avons. Ce n’est pas le comportement attendu d’une todo list.

## Command

## Observer

## State

Nous pensons que ce design pattern est incompatible avec notre projet. En effet, dans notre situation notre todo list permet d’ajouter, de supprimer et de modifier l’état de celle-ci. Ce design pattern serait adapté si nous voulions changer les actions de cette todo list. Or ce n’est pas ce que nous voulons, une todo list doit fondamentalement garder ces fonctions ci. C’est pourquoi nous pensons que ce n’est pas un pattern compatible.