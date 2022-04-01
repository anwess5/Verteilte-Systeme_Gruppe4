# Verteilte-Systeme_Gruppe4

Ilgner, Yessica
Wowerath, Steven
Weßbecher, Aaron

## Beschreibung

Die API soll als eine Schnittstelle für lokale Hotels genutzt werden. Dabei werden alle relevanten Informationen über ein Hotel gespeichert. 
Es soll möglich sein sich alle Hotels in einer bestimmten Stadt anzeigen zu lassen. 


## API Collection 1
Diese Collection soll alle Informationen zu einem bestimmten Hotel ausgeben. Dabei kann nach dem Namen oder der Stadt gesucht werden.
HTTP-Verb GET wird in dem Beispiel verwendet um die Daten vom Server zu den angegebenen Suchkriterien auszugeben 
``` 
            GET /hotels/
            GET /hotels/search?name={name}  -> /hotel/?hotel_name="Royal Hotel"
            GET /hotels/search?city={city}  -> /hotel/?city="Karlsruhe"
HTTP-Verb POST soll genutzt werden wenn ein neues Hotel eröffnet 
HTTP-Verb PUT wird benötigt wenn ein Hotel entweder eine neue Sternekategorie bekommt
HTTP-Verb DELETE wird klar verwendet wenn ein Hotel insolvent geht
``` 

URI:
		/hotel	

Response-Type: 	application/json

Response:

```  
{
    "hotel_id": "3900",
    
    "name": "Royal Hotel",
    
    "city": "Karlsruhe",

    "stars" : "5"
    
    "rooms": "45" ,
    
    "restaurant":  "true"
}
``` 

## API Collection 2
Diese Collection soll alle Informationen zu einem bestimmten Zimmer in einem Hotel angegeben ausgeben. Dabei kann nach dem Zimmertyp oder der Verfübgarkeit eines speziellen Hotels gesucht werden.
HTTP-Verb GET wird in dem Beispiel verwendet um die Daten vom Server zu den angegebenen Suchkriterien auszugeben
``` 
            GET /hotels/rooms
            GET /hotels/rooms/{id}                   
            GET /hotels/rooms/search?type={type}            -> /hotels/rooms/search?type={"Doppelzimmer"}
            GET /hotels/search?availability={availability}  -> /hotels/rooms/search?availability={"frei"}
HTTP-Verb POST soll genutzt werden wenn ein neues Zimmer in einem Hotel angebaut wird 
HTTP-Verb PUT wird benötigt wenn ein Zimmer entweder ein neuen Preis hat, oder sich die Verfügbarkeit geändert hat 
HTTP-Verb DELETE wird klar verwendet wenn ein Zimmer umgebaut wird
``` 

URI:
		/hotel/rooms
Response-Type: 	application/json

Response:

```  
{
    "room_id": "12",

    "hotel_id": "3900",
    
    "type": "Doppelzimmer",
    
    "size": "20 qm",
    
    "price": "85,00" ,

    "availability" : "frei" ,

    "balcony":  "true" 
}
```  

## API Collection 2
Diese Collection soll alle Informationen zu einem bestimmten Mitarbeiter in einem bestimmten Hotel ausgeben. Dabei kann nach dem Nachnamen oder dem Beruf gesucht werden.
HTTP-Verb GET wird in dem Beispiel verwendet um die Daten vom Server zu den angegebenen Suchkriterien auszugeben 
            GET /hotels/employees
            GET /hotels/employees/{id}                   
            GET /hotels/employees/search?lastname={lastname}            -> /hotels/employees/search?lastname={"Maier"}
            GET /hotels/search?job={job}                                -> /hotels/employees/search?job={"Koch"}
HTTP-Verb POST soll genutzt werden wenn ein neuer Mitarbeiter eingestellt wird 
HTTP-Verb PUT wird benötigt wenn ein Mitarbeiter einen neuen Namen oder einen neuen Berufe vtl. bekommt
HTTP-Verb DELETE wird klar verwendet wenn ein Mitarbeiter gekündigt wird
URI:
		/hotel/employees
Response-Type: 	application/json

Response:

```  
{
    "mitarbeiter_id": "7",

    "hotel_id": "3900",
    
    "first name": "Anna",
    
    "last name": "Maier",
    
    "job": "Koch" ,

    "work experience": "12 Jahre"   
}
```    

## Prüfungsfragen
``` 
❏ Beschreibt ein konkretes Anwendungsszenario für den entwickelten
Service und schildert (in wenigen Worten) eine mögliche
Gesamt-Architektur in welcher sich dieser befinden könnte.

Der Benutzer kann mit unserem entwickelten Service nach Hotels in einer ausgewählten Stadt suchen, sich über die Zimmer und über die Mitarbeiter des Hotels genauer infomieren. Diesen Service nutz unser neugieriger Benutzer, weil er an alle Informationen gelangen möchte, die für ihn wichtig sind um eine fundierte Entscheidung zu treffen für seinen nächsten Aufenthalt.

Die Gesamt-Architektur setzt sich wie folgt zusammen:

1. Der Benutzer stellt am Computer eine Suchanfrage über ein Hotel, Zimmer oder einen Mitarbeiter (Request). 
1.1 Der Benutzer stellt die Anfrage mit GET.
1.2 Der Administrator kann über POST,PUT und DELETE Datensätze hinzufügen, verändern und löschen.
2. Die REST-API befindet sich zwischen dem Client und dem Server. Die API stellt sicher, dass der Benutzer mit dem System so kommunizieren kann, dass es die Anforderung versteht und erfüllen kann. 
Man kann sich die API als Vermittler zwischen Nutzern oder Client und den von ihnen benötigten Ressourcen oder Webservices vorstellen.
3. Aufgrund der Anfrage schickt ein Server die relevanten Daten über die API wieder an den Client zurück.(Response)



❏ Welche Probleme können entstehen, wenn der entwickelte Service von
mehreren Parteien verwendet wird? Beschreibt zwei Probleme sowie
mögliche Lösungen.
``` 
```
❏ Was ist abseits der reinen Programmierung für die Produktivsetzung des
entwickelten Services zu beachten? Nenne mindestens zwei Aspekte und
führe diese in ein paar Sätzen aus.
```
