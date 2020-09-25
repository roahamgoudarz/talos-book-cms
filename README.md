
<a  href="https://www.talosdigital.com/">

<img  src="https://www.talosdigital.com/wp-content/themes/TalosWeb/assets/img/logo-talos.svg"  alt="Prototype logo"  title="Talos Digiral"  align="right"  height="30"  />

</a>

  

# 📖 Talos Book CMS


### Introduction

  
Demo: [Live Demo](http://94.237.84.11:3000/)

After running this project, you will be able to:

  
1. Add and manage categories in your bookstore.

2. Add and manage books in your bookstore categories.

3. Search and export your lists.

You should sign in to see the details.


  *If you're on Linux-server, you should open these ports by following command:*
  `ufw allow 3000` *(Frontend)*
  `ufw allow 3001` *(Backend)*
  

## Table of content

  

1. [Installation](#installation)
2. [API Details](#API-Details)
3. [Database](#database)
4. [Stack](#Stack)
5. [Links](#links)

  

  

## Installation

### backend

The latest version can be installed by cloning the script and running composer to install dependencies.

  
Clone the repository
`git clone git@github.com:roahamgoudarz/talos-book-cms.git`


Switch to the repository folder
`cd backend`

 
Install all the dependencies using composer
`npm install`

This will install app's backend and the latest dependencies.

<br>

Update configuration of the database
`cp .env.sample .env`

then
`vim .env`


### fronend

Switch to the repository folder

`cd frontend`

 
Install all the dependencies using npm

 
`npm install`

This will install frontend dependencies.

Update backend address in
`config/connection.js`

Finally by `npm start` you can start!


## API Details
https://documenter.getpostman.com/view/10722927/TVKG2HCa


## Stack

 - [Nest](https://github.com/nestjs/nest)
 - [React](https://github.com/facebook/react)
 - [React-admin](https://github.com/marmelab/react-admin)

  
  
## Database

  ### Suggested Modifications

  #### To do list

 - Add `created_at` and `updated_at` columns and set default value to `CURRENT_TIMESTAMP`
 - hash credentials with `ha256`
- Based on usage modify tables from `MyISAM` to `InnoDB`
<br>

## Links

  
  

*  [Demo](http://94.237.84.11:3000/)
*  [Talos Digital](https://www.talosdigital.com/)
*  [Issue tracker](https://github.com/roahamgoudarz/talos-book-cms/issues)
*  [Source code](https://github.com/roahamgoudarz/talos-book-cms)