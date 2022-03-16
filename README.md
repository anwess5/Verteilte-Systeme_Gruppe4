# Verteilte-Systeme_Gruppe4

Ilgner, Yessica

Wowerath, Steven

Weßbecher, Aaron

## Beschreibung

Die API soll eine Schnittstelle für lokale angesehene Hotels geutzt werden. Dabei werden alle Informationen darüber gespeichert. 
Zum einen dieInformatioenen zum Hotel allgemein, den Zimmern und den Mitarbeitern. Mit Hilfe der ganzen Inhalte können Mneschen die Hotels vergleichen


## API Endpoint 1
URI:
		/hotel/zimmer

Beispiel: 	/hotel/zimmer/?zimmer_id=12
Response-Type: 	application/json

Response:

```  
{
    "zimmer_id": "12",
    
    "Zimmertyp": "Doppelzimmer",
    
    "Zimmergröße": "20 qm",
    
    "Preis/Nacht": "85,00" ,

    "Balkon":  "true" 
}
```  

Beispiel: 	/hotel/location/?hotel_id=3900
Response-Type: 	application/json

Response:

```  
{
    "hotel_id": "3900",
    
    "Name": "Royal Hotel",
    
    "Stadt": "Karlsruhe",
    
    "Anzahl-Zimmer": "45" ,
    
    "Restaurant":  "true"
}
```  

Beispiel: 	/hotel/mitarbeiter/?mitarbeiter_id=7
Response-Type: 	application/json

Response:

```  
{
    "mitarbeiter_id": "7",
    
    "Vorname": "Robüyn",
    
    "Nachnaame": "Pfeil",
    
    "Tätigkeit": "Koch" ,

    "Berufserfahrung": "12 Jahre"   
}
```    

GET /books
GET /books/id
POST /books