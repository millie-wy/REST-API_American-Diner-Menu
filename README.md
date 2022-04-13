# REST-API - American Diner Menu

A mocked American Diner menu with a REST-API created with NodeJS and Express. <br/>

The API has 5 endpoints (2 GETs, POST, PUT and DELETE) using JSON format for transporting the data, adding new items and also fetching, updating and deleting a specific item. The client side was written with React / JavaScript.

[To my repo](https://github.com/millie-wy/REST-API_American-Diner-Menu "REST-API - American Diner Menu")

### Getting started

Download the ZIP, open 2 terminals in your code editor and write the below commands separately:

1. Run the **server** on [http://localhost:8080](http://localhost:8080)
   ```
   cd server
   npm i
   npm start
   ```

2. Run the **client** on [http://localhost:3000](http://localhost:3000)
   ```
   cd client
   npm i
   npm start
   ```
----
(This is an individual assignment from my school)

Krav för godkänt:
- [x] 1. Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] 2. Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [ ] ~~3. Datan som API:et hanterar sparas lokalt i serverfilen~~
- [x] 4. APIét ska svara med 404 om datan saknas.
- [x] 5. Git & GitHub har använts
- [x] 6. Projektmappen innehåller en README.md fil.
- [x] 7. Uppgiften lämnas in i tid!

Krav för väl godkänt:
- [x] 1. Alla punkter för godkänt är uppfyllda
- [x] 2. All data skall vara sparad i en JSON-fil istället för i serverfilen
- [x] 3. Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [x] 4. Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [x] 5. Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
