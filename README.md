# Toy Consignment Shop

You are going to create a basic CRUD application for a consignment store specializing in children's toys. Use Google image search to find some toys for your store.

## SASS Automation

You must use SASS to style your application. Using your automation tool of choice, set up a task to automate the transpilation of SASS to CSS for inclusion in your application.

## Firebase Structure

Create a new Firebase application. There will only be one collection, named `toys`.

### Toy Data

Each toy will need the following properties.

1. Name
2. Price
3. Image URL
4. `id` of the user who is the owner of the toy

## Authentication

You must use basic Firebase email/password authentication to restrict access to your application's views. If the user is not authenticated, none of the views should render, and the user should be immediately shown the register/login view.

## Views (CRUD)

You will need 5 views in this application.

### Register new user and login screen

This should be the initial view of the application is the user is not authenticated.

### List all toys

When viewing all toys, provide a text box on the screen that will allow the user to filter the toys on the product name. Feel free to use Bootstrap, or your library of choice, for laying the toys out in a grid.

### View individual toy details

Create a basic view that shows the toy name as a title, the toy image, and the price. Ensure there is an affordance for the user to easily get back to the list of toys.

### Add new toy

When a new toy is submitted for consignment, ensure that the current user's `id` is stored in the resulting collection object in Firebase.

### Edit toy details

In the edit view, you must display the `id` of the user who created the toy, but it cannot be editable.

## Controllers

Each view should have its own controller to manage its state, and provide the required behavior.

## Routing

Use Angular routing (i.e. `ngRoute`) to handle the binding of a controller to a view, access to each view, and establishing a default view if an incorrect one is typed into the URL bar.

Use the `resolve` property on each route to restrict access if the user is not authenticated.

## Factories

You will need two factories for your application.

1. An `AuthFactory` whose responsibility will be to manage the authentication state for a user. Any controller that needs to obtain the current user's authentication data will use this factory.
1. A `ToyFactory` whose responsibility will be to obtain toy data. Whether it is a listing of all toys, or the data of an individual toy. Any controller that needs to get toy data will use this factory.

