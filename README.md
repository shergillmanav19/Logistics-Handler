# Logistics Handler

# Accesss URL = https://logistics-app-frontend.herokuapp.com/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The project aims to help you maintain your inventory in check.

## How it works

Logistics Handler is a web-app built with React framework using JavaScript on the frontend and Express.js alongside Node on the backend. The application stores data in a MongoDB database. 

Logistics Handler uses Chakra UI components instead of generic HTML tag such as ```<button>```. Using Chakra UI enabled more focus on functionality rather than also taking care of styling using CSS.

### Features of Logistics Handler

* Upon entering the site user are shown what the database entries contain
* Users can edit the current entries, order number is unchangable once set as it should be unique for each entry.
* Current entries can also be deleted
* Users can choose to add entries. Adding an already existing order number will result in that entry not being added to the database

### Improvements to be made

* Implement concurrency in database accessing
* Implement admin roles to give permission on who can add/delete/update entries.
* More routes to implement functionality such as ability to assign/remove inventory items to a named group/collection and ability to create “shipments” and assign inventory to the shipment, and adjust inventory appropriately
* More appealing UI

## How to run app on your machine

1) Clone the repository by clicking on "Code" dropdown on Github and then copying the https link and running the command ```git clone [HTTP-LINK-HERE]``` in your terminal.
2) Open the repository usng VSCode and open up a terminal.
3) There are two folders. Client contains frontend code and Server contains backend code.
4) To run Server folder follow the steps below
  * Make sure you have ```Node version 16.x.x +```. Now run ```npm ci``` to download node_modules used by the project.
  * The proccess.env variables need to be created. Therefore, create a ```.env``` file and added ```PASSWORD``` and ```PORT``` to it.
  * The ```PASSWORD```   would be for the mongoDB database you own and replace the link in ```server.js```. ```PORT``` could be assigned the value 3000.
  * run ```npm start``` and the application should be available on ```localhost:PORT```.
5) To run Client folder follow the steps below
  * Make sure you have ```Node version 16.x.x +```. Now run ```npm ci``` to download node_modules used by the project.
  * The proccess.env variables need to be created. Therefore, create a ```.env``` file and added ```REACT_APP_BACKEND_URL``` and name it ```http://localhost:PORT```. This should be the link your backend (Server folder) is running on.
  * run ```npm start``` and the application should be available on ```localhost```.


The previous steps run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
