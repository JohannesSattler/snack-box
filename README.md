# coffee-box

## Description
Coffee Box is a service where you can subscribe to Coffee. Ever week you will get a box full of coffee, that should be enough for another week. 
We will search for the best coffee fit, after you have answered some basic questions about the coffee you like.

## UI / UX Design
![1-3](https://i.imgur.com/K2L7ba8.png)
![4-7](https://i.imgur.com/AUJOFvn.png)
![7-9](https://i.imgur.com/kJvsFIg.png)

## API Routes

| Method | Endpoint            | Response (200)                                         | Action                          |
| ------ | ------------------- | ------------------------------------------------------ | ------------------------------- |
||||
| POST | /api/auth/signup  | { creates user **no password** }    | Creates a user after validation|       
| POST | /api/auth/login  | { created user **no password** }  | Logs inside creates session|
||||
| PATCH | /api/user/add-info  | { User }  | Updates User Info |
| DELETE | /api/user/delete  | { User }  | Updates User Info |
||||
| GET | /api/products  | [ Product ]  | Gets all Products |
| GET | /api/products/:id  | { Product }  | Gets a Product by ID | 


## Model Schema
  ### **User Schema**
  
  - **id:** ObjectId
  - **firstName:** String
  - **lastName:** String
  - **email:** String
  - **password:** hashed
  - **isVerified:** Boolean
  - **adressInfo:** Array of **ObjectIds** from - **Adress Schema**
  - **coffeeInfo:**
    - **amountPeople:** Number
    - **cubsPerDay:** Number
    - **cubsSize:** String
    - **type:** String
    - **strongness:** Number ( 0-10 )
    - **organic:** Boolean
  - **currentSubscription:** ObjectID from - **Subscription Schema** 
  - **status:** 
    - **packBox:**
      - **date:** DateTime
      - **additionalInfo:** String
      - **current:** Boolean  
    - **orderOnWay:**
      - **date:** DateTime
      - **additionalInfo:** String
      - **current:** Boolean 
      - **trackingLink:** String of Type Url
    - **arrived:**
      - **date:** DateTime
      - **additionalInfo:** String
      - **current:** Boolean
  - **paymentOptions:**
    - **paypal:** 
    - **stribe:**  

  ### **Adress Schema**
  
  -  **city:** String
  -  **postalCode:** String
  -  **street:** String
  -  **houseNumber:** String
  -  **additionalInfo:** String


  ### **Subscription Schema**
  
  - **id:** ObjectId
  - **title:** String
  - **description:** String 
  - **image:** String of Type Url
  - **isCustomized:** Boolean
  - **total:** Number
  - **products:** Array of **ObjectIds** from - **Product Schema**

  ### **Product Schema**
  
  - **id:** ObjectId
  - **title:** String
  - **description:** String
  - **image:** String of Type Url
  - **quantity:** Number
  - **price:** Number
  - **vendorLink:** String of Type Url
  
  ### **Newsletter Schema**
  
  - **id:** ObjectId
  - **email:** String
  
   
  

      
    


  
  
