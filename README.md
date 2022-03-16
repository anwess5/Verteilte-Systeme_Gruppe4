# Verteilte-Systeme_Gruppe4

Ilgner, Yessica

Wowerath, Steven

Weßbecher, Aaron


## API Endpoint 1

URI: /restaurant/speisen/

Beispiel: /restaurant/speise/?speise_id=1

Parameter: speise_id (int)

Response-Type: application/json

Response:


```
{
    "speise_name": "Weinblätter",
    
    "art": "Vorspeise",
    
    "Zubereitungsdauer": "15 Miunten",
    
    "Preis": "5,00"  
}
```


## API Endpoint 2

URI: /restaurant/location/

Beispiel: /restaurant/location/?location_id=1

Parameter: location_id (int)

Response-Type: application/json

Response

```
{
    "location_stadt": "Karlsruhe",
    
    "größe": "50 Personen",
    
    "bewertung": "5 Sterne"   
}
```


## API Endpoint 3

URI: /restaurant/mitarbeiter/

Beispiel: /restaurant/mitarbeiter/?mitarbeiter_id=1

Parameter: mitarbeiter_id (int)

Response-Type: application/json

Response

```
{
    "vorname": "Robüyn",
    
    "nachname": "Pfeil"
    
    "Tätigkeit": "Kellner"
    
    "Erfahrung": "50 Berufsjahre" 
}
```    