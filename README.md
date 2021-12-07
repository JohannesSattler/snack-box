# snack-box

## Description
Snack Box is a service where you can subscribe to snack products. Ever week you will get a box full of snacks, that should be enough for another week. 
We will search for the best snack fit, after you have answered some basic questions about the snacks you like.

## UI / UX Design
![1-3](https://i.imgur.com/K2L7ba8.png)
![4-7](https://i.imgur.com/AUJOFvn.png)
![7-9](https://i.imgur.com/kJvsFIg.png)

## MVP
  - login / signup
  - user questions 
  - products page
  - subscriptions
  - create custom subscriptions
  - checkout
  - orders 
  - profile

## Backlog

  - landing page
  - newsletter signup
  - admin Panel


## API Routes /api

| Method | Endpoint            | Response (200)                                         | Action                          |
| ------------ | ------------------- | ------------------------------------------------------ | ------------------------------- |
|***AUTH ROUTES***|||
| POST | /auth/signup  | { creates user **no password** }    | Creates a user after validation|       
| POST | /auth/login  | { created user **no password** }  | Logs inside creates session|
| GET | /auth/logout  | { message: "Logged out" }  | Logs out, delete session ...|
|***USER ROUTES***|||
| POST | /user/add-info  | { User }  | Updates User Info |
| POST | /user/adress/:id  | { Adress }  | Updates Adress Info |
| Delete | /user/adress/:id  | { Adress }  | Deletes Adress Info |
| DELETE | /user/delete  | { User }  | Deletes User |
|***PRODUCTS ROUTES***|||
| GET | /products  | [ Product ]  | Gets all Products |
| GET | /products/:id  | { Product }  | Gets a Product by ID | 
| POST | /products/:id/create  | { Product }  | Creates a new Product from Template |
| PATCH | /products/:id/update  | { Product }  | Updates a Product by ID | 
| DELETE | /api/products/:id/delete  | { Product }  | Deletes a Product by ID | 
|***SUBSCRIPTION ROUTES***|||
| POST | /subscription/create  | { Subscription Model }  | Creates Subscription Model |
| PATCH | /subscription/update  | { Subscription Model }  | Updates Subscription Model |
| DELETE | /subscription/delete  | { Subscription Model }  | Deletes Subscription Model |
|***NEWSLETTER ROUTES***|||
| POST | /news-letter/create  | { email }  | Creates email in Newsletter Model |
| DELETE | /news-letter/delete  | { email }  | Deletes email in Newsletter Model |


## CLIENT ROUTES
| Endpoint            |            Action        |
| ------------------- | ------------------------ |
| / | shows landing-page **if:** user is not loged in **else:** /orders |
| /login | shows login-page |
| /signup | shows signup-page |
| /subscriptions | shows all subscriptions |
| /subscriptions/create | creates custom subscription |
| /subscriptions/:id | shows all subscriptions by id |
| /products | shows all products |
| /products/:id | shows all product by id |
| /orders | shows signup-page |
| /profile | shows profile-page |
| /checkout | shows checkout-page |
| /landing | shows landing-page |

## Model Schema
  ### **User Schema**
  
  - **id:** ObjectId
  - **firstName:** String
  - **lastName:** String
  - **email:** String
  - **password:** hashed
  - **isVerified:** Boolean
  - **adressInfo:** Array of **ObjectIds** from - **Adress Schema**
  - **snackInfo:**
    - **amountPeople:** Number
    - **perDay:** Number
    - **amount:** Number
    - **types:** Array
    - **forKids:** Boolean
    - **organic:** Boolean
    - **fancy:** Boolean
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


## API & DATASETS

[Candy Dataset](https://github.com/mansimajithia/ETLProject-Candy-Dataset)
  
   
  

      
    


  
  
