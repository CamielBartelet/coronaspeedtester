# CoronaSpeedtester
Protypes of minor challenge for Corona Speedtester\
\
Clone Repository\
Run: npm install

## Start test space
npm run dev\
Port: 3000\
Backend server will run simultaniously

## Environment variables
These variables should be filled in order to use all the apps functionalities.

### MongoDB
You have to setup your own local mongo database. Download mongodb server first. Preferably use "mongodb://localhost/coronaspeedtestapi?synchronize=true" at MONGODB_URI.

MONGODB_URI=mongodb://localhost/coronaspeedtestapi?synchronize=true
MONGODB_DB=coronaspeedtestapi

### Google analytics
GOOGLE_CLIENT_ID=<GOOGLE CLIENT_ID>

### Email Server
EMAIL_USERNAME=<renorm mail>
EMAIL_PASSWORD=<renorm mail password>
NEXTAUTH_EMAILFROM=Renorm <renorm mail>

### Nextauth base
For referencing paths
  
NEXTAUTH_URL=http://localhost:3000

### Eventgoose ticketing
Request your own api key by signing up for eventgoose
  
EVENTGOOSE_API_KEY=<eventgoose api key>

### Checkout url
For referencing payments with eventgoose api
  
RESPONSECHECKOUT_URL=http://localhost:3000/api/tickets

### Mapbox
MAPBOX_KEY=<mapbox key>
  
## Codebase Structure
Appbuild -> Components\
Lib -> Separted libraries for use in multiple facets app\
Models -> Database models\
Pages -> Server side rendered front-end pages and api files\
Public -> Fonts and media\
Styles -> Global stylsheets\
Util -> Db utilities\
