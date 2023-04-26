
# Movers App

This is the React front end for a Movers app built on the Ruby on Rails framework. This front end is responsible for providing the user interface for the app, allowing users to interact with the app and request moving services.


## Features

- Browse a list of trusted movers in your area

- Compare prices and services

- Book a move that meets your needs

- Real-time tracking of the move

- Automatic notifications

- Chat with your movers directly


## Installation

Before installing the React front end, make sure that the Ruby on Rails backend is up and running. Once the backend is ready, follow these steps to install the front end:

Clone this repository to your local machine using
```bash
 git clone https://github.com/spectr-e/movers-ui
 ```
Navigate to the cloned directory using 
```bash 
cd Movers-ui
```
Run 
```bash
npm install
```
 to install all the necessary dependencies.
    
## Usage

Make sure that the Ruby on Rails backend is up and running.

Navigate to the cloned directory using 
```bash 
 cd
```
Run 
```bash
npm start
```
 to start the development server.
Open your browser and go to http://localhost:3000 to access the app.
## Contributions

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`
.
Contributions are always welcome. If you would like to contribute to this project, please follow these steps:

Fork this repository.

- Create a new branch for your changes.
- Make your changes and commit them.
- Push your changes to your forked repository.
- Create a pull request to merge your changes into the main repository.## Screenshots

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Authors
The application was authored through collaboration and collective effort by;

- [Liz Wambeti](https://github.com/lizdmukami)
- [Josiah Nganga]()
- [Samuel Muthaiga]()


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Screenshots

![App Screenshot](/src/assets/hero.png)


## Deployment

This project has been successfully deployed on vercel and can be accessed via the link below ;

- [Movers-ui](https://movers-oqbb632y4-spectr-e.vercel.app/)
## Feedback

If you have any feedback, please reach out to us at *****

