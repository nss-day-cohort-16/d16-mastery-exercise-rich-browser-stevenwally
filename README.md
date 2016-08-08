# Army Surplus

You are going to create a basic CRUD application for an army surplus store. Use Google image search to find some products for your store.

## SASS Automation

You must use SASS to style your application. Using your automation tool of choice, set up a task to automate the transpilation of SASS to CSS for inclusion in your application.

## Firebase Structure

Create a new Firebase application. There will only be one collection, named `products`.

### Product Data

Each product will need the following properties.

1. Product name
2. Product price
3. Product image URL
4. `id` of the user who created the product

## Authentication

You must use basic Firebase email/password authentication to restrict access to your application's views. If the user is not authenticated, none of the views should render, and the user should be immediately shown the register/login view.

## Views (CRUD)

You will need 5 views in this application.

### Register new user and login screen

This should be the initial view of the application is the user is not authenticated.

### List all products

When viewing all products, provide a text box on the screen that will allow the user to filter the products on the product name. Feel free to use Bootstrap, or your library of choice, for laying the products out in a grid.

### View individual product details

Create a basic view that shows the product name as a title, the product image, and the price. Ensure there is an affordance for the user to easily get back to the list of products.

### Add new product

When a new product is created, ensure that the current user's `id` is stored in the resulting collection object in Firebase.

### Edit product details

In the edit view, you must display the `id` of the user who created the product, but it cannot be editable.

## Controllers

Each view should have its own controller to manage its state, and provide the required behavior.

## Routing

Use Angular routing (i.e. `ngRoute`) to handle the binding of a controller to a view, access to each view, and establishing a default view if an incorrect one is typed into the URL bar.

Use the `resolve` property on each route to restrict access if the user is not authenticated.

## Factories

You will need two factories for your application.

1. An `AuthFactory` whose responsibility will be to manage the authentication state for a user. Any controller that needs to obtain the current user's authentication data will use this factory.
1. A `ProductFactory` whose responsibility will be to obtain product data. Whether it is a listing of all products, or the data of an individual product. Any controller that needs to get product data will use this factory.

