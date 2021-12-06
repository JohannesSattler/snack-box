# coffee-box

## Description
Coffee Box is a service where you can subscribe to Coffee. Ever week you will get a box full of coffee, that should be enough for another week. 
We will search for the best coffee fit, after you have answered some basic questions about the coffee you like.

## UI / UX Design
![1-3](https://i.imgur.com/K2L7ba8.png)
![4-7](https://i.imgur.com/AUJOFvn.png)
![7-9](https://i.imgur.com/kJvsFIg.png)

## Model Schema
  ### **User Schema**
  
  - **id:** ObjectId
  - **firstName:** String
  - **lastName:** String
  - **email:** String
  - **password:** hashed
  - **isVerified:** Boolean
  - **adressInfo** 
    -  **city:** String
    -  **postalCode:** String
    -  **street:** String
    -  **houseNumber:** String
    -  **additionalInfo:** String
  - coffeeInfo
    - **amountPeople:** Number
    - **cubsPerDay:** Number
    - **cubsSize:** String
    - **type:** String
    - **strongness:** Number ( 0-10 )
    - **organic:** Boolean
  - **shoppingCart:** Array of **ObjectIDs** from - **Product Schema**


  ### **Product Schema**
  

      
    


  
  
