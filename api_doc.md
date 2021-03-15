ENDPOINT:

1. `POST /login`
2. `POST /register`
3. `GET /products`
4. `POST /products`
5. `GET /products/:id`
6. `PUT /products/:id`
7. `PATCH /products/:id`
8. `DELETE /products/:id`
9. `POST /oAuth/`

## 1. `POST /login`

Description =
User login with email and password

Request =

-   headers =

not needed

-   body =

        ```json
        {
          "email": "<email - string>",
          "password": "<password - string>"
        }
        ```

    Response (200 - OK) =

```json
{
    "access_token": "<access token>"
}
```

    Response (400 - BAD REQUEST) =

```json
{
    "access_token": "<email / password is wrong>"
}
```

Response (500 - Internal Server Error)

```json
{
    "message": "<internal server Error message>"
}
```

## 2. `POST /register`

Description =
new User can register with unique email and their password

Request =

-   headers =
    not needed

-   body =

    ```json
    {
        "email": "<email - string>",
        "password": "<password - string>"
    }
    ```

Response (201 - CREATED) =

```json
{
    "id": "<id by system>",
    "email": "<email by user>"
}
```

Response (400 - BAD REQUEST) =

```json
{
    "message": "<bad request message>"
}
```

Response (500 - Internal Server Error)

```json
{
    "message": "<internal server Error message>"
}
```

## 3. `GET /products`

Description =

User can get list of all the products

Request =

-   headers =

    {
    "access_token": "<access token>"
    }

-   body =

    not needed

Response (200 - OK) =

```json
{
    "id": "<given id by system>",
    "name": "<product name>",
    "image_url": "<image url>",
    "price": "<price>",
    "stock": "<stock>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<Not Found message>"
}
```

Response (500 - Internal Server Error)

```json
{
    "message": "<internal server Error message>"
}
```

## 4. POST /products`

Description =

User can create their own todo

Request =

-   headers =

    {
    "access_token": "<access token>"
    }

-   body =

    {
    "title": "<products title - string>",
    "description": "<products description - string>",
    }

Response (201 - CREATED) =

{
  "theData": {
    "id": "<id>",
    "name": "<product name>",
    "image_url": "<image url>",
    "price": "<price>",
    "stock": "<stock>",
    "UserId": "<UserId>",
    "updatedAt": "<date by system>",
    "createdAt": "<date by system>"
  }
}

Response (400 - BAD REQUEST) =

```json
{
    "message": "<bad request message>"
}
```

Response (500 - INTERNAL SERVER ERROR) =

```json
{
    "message": "<internal server message>"
}
```

## 5. `GET /products/:id`

Description =

User can get products by the id (+req.params.id)

Request =

-   headers =

    {
    "access_token": "<access token>"
    }

-   body =

    not needed

Response (200 - OK ) =

```json
{
    "id": "<given id by system>",
    "name": "<product name>",
    "image_url": "<image url>",
    "price": "<price>",
    "stock": "<stock>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<not found message>"
}
```

Response (500 - INTERNAL SERVER ERROR) =

```json
{
    "message": "<internal server message>"
}
```

## 6. `PUT /products/:id`

Description =

User can update the products according to its id (+req.params.id)

Request =

-   headers =

    {
    "access_token": "<access token>"
    }

-   body =

    {
    "title": "<products title - string>",
    "category": "<products category - string>",
    }

Response (200 - OK ) =

```json
{
    "id": "<given id by system>",
    "name": "<product name>",
    "image_url": "<image url>",
    "price": "<price>",
    "stock": "<stock>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>"
}
```

Response (400 - BAD REQUEST) =

```json
{
    "message": "bad request message"
}
```

Response (404 - DATA NOT FOUND) =

```json
{
    "message": "data not found message"
}
```

Response (500 - INTERNAL ERROR) =

```json
{
    "message": "<internal error message>"
}
```

## 7. `PATCH /products/:id`

Description =

User can update the category of products to become backlog / todo / doing / done

Request =

-   header =

{
"access_token": "<access token>"
}

-   body =

{
"category": "<value of the selection between backlog or todo or doing or done>"
}

Response (200 - OK) =

```json
{
    "id": "<given id by system>",
    "name": "<product name>",
    "image_url": "<image url>",
    "price": "<price>",
    "stock": "<stock>",
    "createdAt": "<date by system>",
    "updatedAt": "<date by system>"
}
```

Response (400 - BAD REQUEST) =

```json
{
    "message": "<bad request message>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<not found message>"
}
```

Response (500 - INTERNAL ERROR) =

```json
{
    "message": "<internal error message>"
}
```

## 8. `DELETE /products/:id`

Description =

User can delete the products by their selection according to its id

Request =

-   header =
    {
    "access_token": "<access token>"
    }

-   body =
    not needed

Response (200 - OK) =

```json
{
    "message": "<delete message>"
}
```

Response (404 - NOT FOUND) =

```json
{
    "message": "<not found message>"
}
```

response (500 - INTERNAL SERVER ERROR) =

```json
{
    "message": "<internal server error message>"
}
```

## 9. `POST /oAuth`

Description =

User can login with their own Google Account

Request =

-   header =
    {
    "access_token": "<access token>"
    }

-   body =

```json
{
    "google_token": "<google_token provided by google - string>"
}
```

Response (200 - OK) =

```json
{
    "id": "<id by system>",
    "email": "<email by user>",
    "access_token": "<access_token>"
}
```

response (500 - INTERNAL SERVER ERROR) =

```json
{
    "message": "<internal server error message>"
}
```
