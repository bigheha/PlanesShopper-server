# Backend for PlanesShopper

## Technologies

- Node.js, Express.js;
- MongoDB, Mongoose;
- Nodemon;

## API usage

Below are descriptions of this server's endpoints and examples of request bodys for them.

### /producs endpoints

#### GET /products

Return **all** documents from **products** collection.

---

#### POST /products

Creates a **single** document for **products** collection. To create this document, all fields of Product schema should be provided:

{

    "title": "Lost caverns of Ixalan draft booster",
    "snippet": "Cave dinos",
    "description": "Venture to the core of jungle-covered plane",
    "amount": 1,
    "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wCEAAQEBAQEBAUFBQU…",
    "type": "booster-draft"

}

---

#### PATCH /products

Updates a **single** document in **products** collection. To update a document, provide a document's **\_id** and fields to change in changes **object**:

{

    "id": "65c261ba1a01b0107367cada"
    "changes": {
        "name": "Murders at Karlov manor play booster",
        "snippet": "A mystery to kill for"
    }

}

---

#### DELETE /products

Deletes a **single** document from **products** collection. To use, provide an \_id of a document to be deleted:

{

    "id": "65c261ba1a01b0107367cada"

}
