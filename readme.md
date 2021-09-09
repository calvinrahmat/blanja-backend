<h1 align="center">
  Blanja Backend
</h1>

<p align="center"><img src="https://www.arkademy.com/img/logo%20arkademy.1c82cf5c.svg" width="500px" alt="Arkademylogo.svg" /></p>

<p align="center">
    <a href="https://www.arkademy.com/" target="blank">Our Website</a>
    ·
    <a href="https://www.arkademy.com/auth/signup">Join With Us</a>
    ·
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#environment">Environmental Variables</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is the backend prototype for Blanja.site. You can check the front-end in this Repo: https://github.com/calvinrahmat/blanja.

## Features

<ol>
<li>Register</li>
<p>We use bcrypt to hash the password.</p>
<li>Login</li>
<p>For the authentication we use JWT to validate the user and also token to access the website.</p>
<li>Upload Images</li>
<p>To upload images we use multer for handling multipart/form-data. To store the images we use Cloudinary. But you must use the Cloudinary API.</p>
<li>Store data</li>
<p>To store the products information and user's profile we use PostgreSQL.</p>
<li>Caching</li>
<p>We use Redis to do caching so that you can showing the products catalog much faster.</p>
<li>Logging</li>
<p>We use Winston to log the requests from the APIs.</p>
<li>Testing</li>
<p>We use Jest for testing our application. You can simply run `npm test`.</p>
<ol>

### Built With

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [PostgresSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Sequelize](http://sequelize.org/)
- [Multer](https://github.com/expressjs/multer)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/calvinrahmat/Tugas-restapi-1.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your env

## Environmental Variables

You must provide the env value to run the application.

1. POSTGRESQL:

DB_USERS : To set the user that you have created for POSTGRESQL.
DB_HOST : To set the host for example 'localhost'
DB_NAME : To set the database name
DB_PASS : to set the password for your POSTGRESQL

2. JWT Key:

JWT_KEY : This is for create signature for your token. You can set to anything value that you want either string or number.

3. Cloudinary

Authenticated uploading is done over HTTPS using a secure protocol based on your Cloudinary account's cloud_name, api_key and api_secret parameters.

CLOUD_NAME : To set the cloud name provided in your account.
CLOUD_KEY : To set the API key provided in your account.
CLOUD_SECRET : To set the API secret provided in your account.

4. Redis

REDIS_HOST : To set the Redis Host for example 'localhost'
REDIS_PASS : To set the password for Redis

<!-- USAGE EXAMPLES -->

## Usage

You should download POSTMAN or any other API testing tool to test the API. You can refer in our documentation :relaxed:

_Please refer to our API documentaion [Postman Documentation](https://documenter.getpostman.com/view/16482670/Tzm3nHTf)_

<!-- CONTACT -->

## Contact

LinkedIn - [https://www.linkedin.com/in/calvin-rahmat](https://www.linkedin.com/in/calvin-rahmat)

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)
