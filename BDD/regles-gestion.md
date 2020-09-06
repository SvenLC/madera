# Règles de gestion

## Projet

### Chantier

- Un chantier est lié à un et un seul client
- Un chantier est lié à un et un seul commercial
- Un chantier peu contenir plusieurs produits

### Produit

- un produit est lié à un et un seul chantier
- Un produit est lié à une et une seule gamme
- Un produit est lié à un et un seul modèle d'un gamme
- Un produit peut être lié à un ou plusieur modules

### Gamme

- Une gamme peut être lié à un ou plusieurs produit
- Une gamme peut être lié à un ou plusieurs modèles

### Modèle gamme

- Un modèle est lié à une et une seule gamme
- un modèle peut avoir un ou plusieurs changements

### Entité module

- Un module est lié à un et un seul produit
- Un produit correspond à une et un seule gamme
- Un produit correspond à un et un seul modèle d'un gamme
- Un module peut être lié à une ou plusieurs sections

### Section

- Une section est lié à un et un seul module
- Une section à un angle qui peut être 90° ou 270°
- Une section peut être à la suite d'une autre section

## Client

- Un client est lié à un et un seul commercial
- Un client peut avoir une ou plusieurs adresse
