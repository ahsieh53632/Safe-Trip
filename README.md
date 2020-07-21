# Safe-Trip: Enjoy going anywhere without worring about CoVID-19!:
How do you know if your Uber driver have had contact with someone who has CoVID-19 or is infected himself/herself? <br />
How do you know if it's safe to go somewhere you want during this pendamic? <br />
consider using our web app!
### Installation Free, Staying away from CoVID-19 is a camera QRCODE scan away!

# Link
## https://safetripsite.herokuapp.com
# Description

A project designed to help tracking if you have had contact with anyone who has coid-19 and to also help you make sure you stay away from the virus while going outdoors :).

# Built With
Built Front End with React.js <br/>
Built Back End with Node.js and MySQL <br />
Gatsby

# Structure
###### BackEnd: /api <br/>
###### Everything else: front end/gatsby stuff

# Pre-req/installation guide
Node.js <br/>
install all dependicies: <br />
 run `npm install`
 ## BackEnd config:
 If you wish to test this on local host:
 set up mysql connection in api/app.js, and change all api calls (fetch) to localhost\
We've provided create_db.sql in /api to help you build all tables you need <br />
`Table: person, beento, encounter, location` <br/>
start server: <br/>
`gatsby develop` <br />
start api server (): <br/>
goto /api  <br/>
`npm install` <br/>
`npm start`

# Functinoality:
  - Login/Register: You will need to register the first time, and it should automaticaly log you in after that
  - scan QRCODE: Don't need to open any website or install any apps, just scan it with your builtin camera and our website will make api calls automatically
    - ######  if you wish to test this locally check our guide bellow
      - Encounters/Uber: will show you if this individual can be carrying the virus, and store this encounter to our database
      - Places: will store data in our database that indicates you've been to this location at the date
  - AtRisk: will show when and where you have encountered infected individuals or the place you both have went (Does not show their info)
  - MyQRCODE: Generate your personal QRCODE to allow others to scan or create place QRCODE tourists/citizens to scan
    - ###### Note: updating you're condition (i.e. if you're infected or atRist) will only be possibe via a doctor, also through scanning a QRCODE
  - UpdateInfo: Updating your personal info (name, phone, address etc.)
  - AddID: allow user to store data to our database for situations where you can't scan QRCODE or running the web on a computer
    - ###### Note: currently we have only finished the front end part, not linked to api yet
  - Alert: will show an alert on home page if you are at risk
  - MainPage: MainPage
  - ViewInfo: view personal info

# Test QRCODE api calls locally:
## Encounters (or Uber, AirBnb):
 - navigate to /scanCode?info={"type": "encounter", "otherpersonid": "the username of the otherperson u met (string)", "locationid": "location id (stored on database, int)", "date": "the date"}
## Places:
 - navigate to /scanCode?info={"type": "beento", "locationid": "location id (stored on database, type int)", "date": "the date"}

