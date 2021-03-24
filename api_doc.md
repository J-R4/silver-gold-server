ENDPOINT:

1. `POST /login`
2. `POST /register`
3. `GET /products`
4. `POST /products`
5. `GET /products/:id`
6. `PUT /products/:id`
7. `PATCH /products/:id`
8. `DELETE /products/:id`
9. `GET /banners`
10. `POST /banners`
11. `GET /banners/:id`
12. `PUT /banners/:id`
13. `PATCH /banners/:id`
14. `DELETE /banners/:id`
15. `GET /carts`
16. `POST /carts`
17. `GET /carts/:id`
18. `PUT /carts/:id`
19. `PATCH /carts/:id`
20. `DELETE /carts/:id`
21. `GET /trans`
22. `POST /trans`
23. `GET /trans/:id`
24. `DELETE /trans/:id`
25. `GET /wish`
26. `POST /wish`
27. `GET /wish/:id`
28. `DELETE /wish/:id`
29. `POST /oAuth/`
30. `GET /categories`
31. `GET /sort`
32. `GET /profile`
33. `DELETE /profile`

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

## 9. `GET /banners`

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

## 10. POST /banners`

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

## 11. `GET /banners/:id`

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

## 12. `PUT /banners/:id`

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

## 13. `PATCH /banners/:id`

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

## 14. `DELETE /banners/:id`

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

## 15. `GET /carts`

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

## 16. POST /carts`

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

## 17. `GET /carts/:id`

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

## 18. `PUT /carts/:id`

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

## 19. `PATCH /carts/:id`

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

## 20. `DELETE /carts/:id`

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

## 21. `GET /trans`

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

## 22. POST /trans`

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

## 23. `GET /trans/:id`

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

## 24. `DELETE /trans/:id`

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

## 25. `GET /wish`

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

## 26. POST /wish`

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

## 27. `GET /wish/:id`

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

## 28. `DELETE /wish/:id`

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

## 29. `POST /oAuth`

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
## 30. `GET /categories`

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

## 31. `GET /sort`

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

## 32. `GET /profile`

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

## 33. `DELETE /profile`

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