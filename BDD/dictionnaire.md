# Dictionnaire des données

## Projet

### Entité chantier

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | CHA_ID       | N    |
| Référence               | CHA_REF      | S    |
| Nom                     | CHA_NOM      | S    |
| Date                    | CHA_DATE     | DATE |

### Entité produit

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | PRO_ID       | N    |

### Entité gamme

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | GAM_ID       | N    |
| Nom                     | GAM_NOM      | S    |

### Entité modèle de gamme

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | MOD_GAM_ID   | N    |
| Nom                     | MOD_GAM_NOM  | S    |

### Entitié personnalisation

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |


### Entité module

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | MOD_ID       | N    |
| Nom                     | MOD_NOM      | S    |
| Type                    | MOD_TYPE     | S    |

### Entité section

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | SEC_ID       | N    |
| Numéro                  | SEC_NUM      | N    |
| Longueur                | SEC_LONGUEUR | N    |
| Angle                   | SEC_ANGLE    | S    |
| Degrée angle            | SEC_DEGREE   | N    |

### Entité devis

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | DEV_ID       | N    |
| Date                    | DEV_DATE     | DATE |

## Configuration

### Configuration module

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | DEV_ID       | N    |
| Date                    | DEV_DATE     | DATE |

## Configuration

### Entité Configuration module

| Libellé de la propriété | Nom du champ       | Type |
| ----------------------- | ------------------ | ---- |
| Identifiant             | CMO_ID             | N    |
| Nom                     | CMO_NOM            | S    |
| Coupe de principe       | CMO_COUPE_PRINCIPE | S    |
| CCTP                    | CMO_CCTP           | S    |

## Commerciaux

### Entité commerciaux

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | COM_ID       | S    |
| Nom                     | COM_NOM      | S    |
| Prénom                  | COM_PRENOM   | S    |
| Email                   | COM_EMAIL    | S    |
| Téléphone               | COM_TEL      | S    |

## Commerciaux

### Entité commerciaux

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | COM_ID       | S    |
| Nom                     | COM_NOM      | S    |
| Prénom                  | COM_PRENOM   | S    |
| Email                   | COM_EMAIL    | S    |
| Téléphone               | COM_TEL      | S    |

## Client

### Entité Client

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | CLI_ID       | N    |
| Nom                     | CLI_NOM      | S    |
| Prénom                  | CLI_PRENOM   | S    |
| Mail                    | CLI_MAIL     | S    |
| Téléphone               | CLI_TEL      | S    |

### Entité Code postal

| Libellé de la propriété | Nom du champ    | Type |
| ----------------------- | --------------- | ---- |
| Code commune            | CPT_COMMUNE     | N    |
| Code postal             | CPT_CODEPOST    | N    |
| Code département        | CPT_DEPARTEMENT | N    |
| Code Insee              | CPT_INSEE       | N    |

### Entité Adresse

| Libellé de la propriété | Nom du champ    | Type |
| ----------------------- | --------------- | ---- |
| Identifiant             | ADR_ID          | N    |
| Numéro de la voie       | ADR_NUM_VOIE    | N    |
| Libellé de la rue       | ADR_LIBELLE_RUE | S    |
| Ville                   | ADR_VILLE       | S    |

## Fournisseur

### Entité Famille de composant

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | FAM_ID       | N    |
| Nom                     | FAM_NOM      | S    |

### Entité Composant

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | COM_ID       | N    |
| Nom                     | COM_NOM      | S    |
| Quantité                | COM_QUANTITE | S    |
| Quantité                | COM_NOM      | S    |

### Entité Article

| Libellé de la propriété | Nom du champ | Type |
| ----------------------- | ------------ | ---- |
| Identifiant             | COM_ID       | N    |
| Nom                     | COM_NOM      | S    |
| Quantité                | COM_QUANTITE | S    |

### Entité Composant

| Libellé de la propriété | Nom du champ    | Type |
| ----------------------- | --------------- | ---- |
| Identifiant             | COM_ID          | N    |
| Nom                     | COM_NOM         | S    |
| Désignation             | COM_DESIGNATION | S    |
| Quantité                | COM_QUANTITE    | S    |
| Prix d'achat            | COM_PRIX_ACHAT  | N    |
| Prix de vente           | COM_PRIX_VENTE  | N    |

### Entité Modalité paiement

| Libellé de la propriété | Nom du champ              | Type |
| ----------------------- | ------------------------- | ---- |
| Identitifiant           | MOD_PAI_ID                | N    |
| Etape                   | MOD_PAI_ETAPE             | S    |
| Pourcentage somme       | MOD_PAI_POURCENTAGE_SOMME | N    |
