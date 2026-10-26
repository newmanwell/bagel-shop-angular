# Bagel Shop Angular

An online bagel shop where visitors can browse the menu, look at the details of each bagel, add bagels to a cart, and submit an order. This is the Angular rebuild of my original React project.

**Live site:** [thebagelshop.shop](https://www.thebagelshop.shop/)
**React version:** [newmanwell/bagel-shop](https://github.com/newmanwell/bagel-shop)

## Features

* Browse every bagel on the menu, each with a photo and short description
* Detail page for each bagel showing price, stock left, and whether it comes with butter or cream cheese
* Add bagels to a shopping cart and adjust quantities with `+` / `-` buttons
* Cart total is calculated automatically
* Cart is saved in `localStorage`, so it survives page refreshes
* Submit-order form (first name, last name, email) with validation:
  * All fields are required
  * Email must be a valid email address
  * The submit button is disabled while the form is invalid or the cart is empty
* Cart is cleared and the form is reset after an order is submitted

## Pages

| Route          | Component      | Description                          |
| -------------- | -------------- | ------------------------------------ |
| `/`            | `Home`         | Landing page                         |
| `/allbagels`   | `AllBagels`    | List of all available bagels         |
| `/details/:id` | `Details`      | Details for one bagel, add to cart   |
| `/cart`        | `ShoppingCart` | Cart contents and order form         |

## Tech Stack

* [Angular](https://angular.dev/) 21 with standalone components
* Angular Router for navigation
* Angular Reactive Forms for form handling and validation
* TypeScript
* Deployed to AWS using GitHub Actions

## Project Structure

```
src/app/
├── all-bagels/       # Menu page listing every bagel
├── bagel-location/   # Card component for a single bagel in the list
├── details/          # Single bagel page with "Add to Cart"
├── home/             # Home page
├── shopping-cart/    # Cart and order form
├── bagel.ts          # Service holding the bagel data and order submission
├── bagel-location.ts # Bagel interface
├── cart-item.ts      # Cart item interface (id + quantity)
├── routes.ts         # Route definitions
└── app.ts            # Root component (header, router outlet, footer)
```

The bagel menu is hard-coded in the `Bagel` service (`src/app/bagel.ts`), so there is no backend or database. Submitting an order shows a confirmation alert rather than sending anything to a server.

## Getting Started

Prerequisites: [Node.js](https://nodejs.org/) and npm.

```bash
# install dependencies
npm install

# start the dev server
npm start
```

Then open [http://localhost:4200](http://localhost:4200). The app reloads automatically when you change a source file.

## Scripts

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm start`     | Runs the dev server (`ng serve`)              |
| `npm run build` | Builds the app for production into `dist/`   |
| `npm run watch` | Rebuilds on changes using the development config |

## Deployment

The site is deployed to AWS automatically with GitHub Actions (see [.github/workflows/main.yml](.github/workflows/main.yml)).

## About the Rebuild

This project started as a React app and was rebuilt in Angular as a way to learn Angular's component model, services with dependency injection, routing, and reactive forms.
