# ChangeLog API

Welcome to the ChangeLog API, a simple and intuitive solution for managing product updates in your imaginary ChangeLog app. This API empowers product managers and engineers to seamlessly post, retrieve, update, and delete product updates.

## Getting Started

To integrate the ChangeLog API into your application, follow the steps below:

### Base URL

The base URL for all API endpoints is:

```
https://api-design-using-express-and-prisma.onrender.com
```

### Authentication

All API requests require authentication. Include your API key in the request headers:

```
Authorization: Bearer YOUR_API
```

Replace `YOUR_API_KEY` with your actual API key.

### Endpoints

#### 1. Create Product

- **Endpoint:** `POST /product`
- **Description:** Create a new product.
- **Example:**
  ```bash
  curl -H "Authorization: Bearer YOUR_API_KEY" https:api-design-using-express-and-prisma.onrender.com/api/product
  ```

#### 2. Get Products

- **Endpoint:** `GET /updates`
- **Description:** Retrieve a list of all product updates.
- **Example:**
  ```bash
  curl -X POST -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d '{"title": "New Feature", "description": "Exciting new feature added!"}' https:api-design-using-express-and-prisma.onrender.com/api/product/id
  ```

#### 3. Update a Product Update

- **Endpoint:** `PUT /updates/{update_id}`
- **Description:** Update an existing product update.
- **Example:**
  ```bash
  curl -X PUT -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d '{"description": "Updated description for the new feature."}' https:api-design-using-express-and-prisma.onrender.com/api/update/123
  ```

#### 4. Delete a Product Update

- **Endpoint:** `DELETE /updates/{update_id}`
- **Description:** Delete an existing product update.
- **Example:**
  ```bash
  curl -X DELETE -H "Authorization: Bearer YOUR_API_KEY" https:api-design-using-express-and-prisma.onrender.com/api/update/123
  ```

## Response Format

All responses are in JSON format and include the following structure:

```json
{
  "status": "success",
  "data": {...}
}
```

In case of an error, the response will include an error message:

```json
{
  "status": "error",
  "message": "Error message here"
}
```


Happy coding!
