const swaggerDocs = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "REST API for a simple Hotel Service",
      description: "API for hotels",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    host: "localhost:3000",
    basePath: "/hotels",
    tags: [
      {
        name: "Hotels",
        description: "hotels in the database",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/": {
        get: {
          tags: ["Hotels"],
          summary: "Get all hotels in the system",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Hotel",
              },
            },
          },
        },
      },
      "/search": {
        get: {
          tags: ["Hotels"],
          summary: "Get a specific hotel by name",
          parameters: [
            {
              name: "name",
              in: "path",
              description: "Name of the hotel searched for",
              schema: {
                $ref: "#/definitions/Hotel",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Hotel",
              },
            },
          },
        },
      },
      "/search": {
        get: {
          tags: ["Hotels"],
          summary: "Get hotels by one city",
          parameters: [
            {
              name: "city",
              in: "path",
              description: "City of the hotel searched for",
              schema: {
                $ref: "#/definitions/Hotel",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/Hotel",
              },
            },
          },
        },
      },
      "/add": {
        post: {
          tags: ["Hotels"],
          summary: "Add a new hotel",
          parameters: [
            {
              name: "hotel",
              in: "body",
              description: "Hotel to be added",
              schema: {
                $ref: "#/definitions/Hotel",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/Hotel",
              },
            },
          },
        },
      },
    },
    definitions: {
      Hotel: {
        required: ["name", "city", "stars"],
        properties: {
          _id: {
            type: "string",
            uniqueItems: true,
          },
          name: {
            type: "string",
          },
          city: {
            type: "string",
          },
          stars: {
            type: "integer",
          },
          rooms: {
            type: "integer",
          },
          restaurant: {
            type: "boolean",
          },
        },
      },
    },
  };
  
  export default swaggerDocs;
  