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
    host: "localhost:4000",
    basePath: "/hotels",
    tags: [
      {
        name: "Hotels",
        description: "hotels in the database",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    //___________________________HOTEL_______________________________
    paths: {
      "/": {
        get: {
          tags: ["Hotels"],
          summary: "Get all hotels in the system",
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            404: {
              description: "Hotel Not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel",
                    },
                  },
                },
              }
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
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            404: {
            description: "Hotel Not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel",
                    },
                  },
                },
              }
          },
        },
      },
      "/search": {
        get: {
          tags: ["Hotels"],
          summary: "Get a specific hotel by city",
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
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            404: {
              description: "Hotel Not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel",
                    },
                  },
                },
              }
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
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            404: {
              description: "Hotel Not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel",
                    },
                  },
                },
              }
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
      "/change": {
        put: {
          tags: ["Hotels"],
          summary: "Change a hotel",
          parameters: [
            {
              name: "stars", 
              in: "path", 
              schema: {
                $ref: "#/definitions/Hotel", 
              },
              required: true,
              description: "Stars of hotel to be updated", 
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            404: {
              description: "Hotel Not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel",
                    },
                  },
                },
              }
          },
        },
      },
      "/delte": {
        delete: {
          tags: ["Hotels"],
          summary: "delete a  hotel",
          parameters: [
            {
              name: "name",
              in: "path",
              schema: {
                $ref: "#/definitions/Hotel",
              },
              required: true, 
              description: "Deleting a specific Hotel", 
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            404: {
              description: "Hotel Not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel",
                  },
                },
              },
            },
            500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel",
                    },
                  },
                },
              }
          },
        },
      },
    //___________________________________ROOM_____________________________
    paths: {
        "/": {
          get: {
            tags: ["Rooms"],
            summary: "Get all rooms in the system",
            responses: {
              200: {
                description: "OK",
                content: {
                  "application/json": {
                    schema: {
                    $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              },
              404: {
                description: "Room Not found",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              },
              500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              }
            },
          },
        },
        "/search": {
          get: {
            tags: ["Rooms"],
            summary: "Get a specific rooms by hotel",
            parameters: [
              {
                name: "hotel_id",
                in: "path",
                description: "Hotel_id of the room searched for",
                schema: {
                    $ref: "#/definitions/Hotel/Room",
                },
              },
            ],
            responses: {
              200: {
                description: "OK",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              },
              404: {
                description: "Room Not found",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              },
              500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              }
            },
          },
        },
        "/search": {
            get: {
              tags: ["Rooms"],
              summary: "Get a specific rooms by availability",
              parameters: [
                {
                  name: "availability",
                  in: "path",
                  description: "Availability of the room searched for",
                  schema: {
                      $ref: "#/definitions/Hotel/Room",
                  },
                },
              ],
              responses: {
                200: {
                  description: "OK",
                  content: {
                    "application/json": {
                      schema: {
                          $ref: "#/definitions/Hotel/Room",
                      },
                    },
                  },
                },
                404: {
                  description: "Room Not found",
                  content: {
                    "application/json": {
                      schema: {
                          $ref: "#/definitions/Hotel/Room",
                      },
                    },
                  },
                },
                500: {
                    description: "Server Not found",
                    content: {
                      "application/json": {
                        schema: {
                          $ref: "#/definitions/Hotel/Room",
                        },
                      },
                    },
                  }
              },
            },
          },
        "/add": {
          post: {
            tags: ["Rooms"],
            summary: "Add a new room",
            parameters: [
              {
                name: "room",
                in: "body",
                description: "Room to be added",
                schema: {
                    $ref: "#/definitions/Hotel/Room",
                },
              },
            ],
            responses: {
              200: {
                description: "OK",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              },
              404: {
                description: "Room Not found",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              },
              500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              }
            },
          },
        },
      },
      definitions: {
        Room: {
          required: ["hote_id", "type", "price"],
          properties: {
            _id: {
              type: "string",
              uniqueItems: true,
            },
            hotel_id: {
              type: "string",
            },
            type: {
              type: "string",
            },
            size: {
              type: "string",
            },
            price: {
              type: "integer",
            },
            availability: {
                type: "integer",
              },
            balcony: {
              type: "boolean",
            },
          },
        },
      },
      "/change": {
        put: {
          tags: ["Rooms"],
          summary: "Change a room",
          parameters: [
            {
              name: "price", 
              in: "path", 
              schema: {
                $ref: "#/definitions/Hotel/Room", 
              },
              required: true,
              description: "Price of room to be updated", 
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel/Room",
                  },
                },
              },
            },
            404: {
              description: "Room Not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel/Room",
                  },
                },
              },
            },
            500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              }
          },
        },
      },
      "/delte": {
        delete: {
          tags: ["Rooms"],
          summary: "delete a  room",
          parameters: [
            {
              name: "id",
              in: "path",
              schema: {
                $ref: "#/definitions/Hotel/Room",
              },
              required: true, 
              description: "Deleting a specific Room", 
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel/Room",
                  },
                },
              },
            },
            404: {
              description: "Room Not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel/Room",
                  },
                },
              },
            },
            500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Room",
                    },
                  },
                },
              }
          },
        },
      },
      //___________________________________EMPLOYEE_____________________________
      paths: {
        "/": {
          get: {
            tags: ["Employees"],
            summary: "Get all employees in the system",
            responses: {
              200: {
                description: "OK",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel/Employee",
                    },
                  },
                },
              },
              404: {
                description: "Employee Not found",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Employee",
                    },
                  },
                },
              },
              500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel/Employee",
                    },
                  },
                },
              }
            },
          },
        },
        "/search": {
          get: {
            tags: ["Employee"],
            summary: "Get a specific employee by job",
            parameters: [
              {
                name: "job",
                in: "path",
                description: "Job of the employee searched for",
                schema: {
                    $ref: "#/definitions/Hotel/Employee",
                },
              },
            ],
            responses: {
              200: {
                description: "OK",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Employee",
                    },
                  },
                },
              },
              404: {
                description: "Employee Not found",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Employee",
                    },
                  },
                },
              },
              500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel/Employee",
                    },
                  },
                },
              }
            },
          },
        },
        "/search": {
            get: {
              tags: ["Employee"],
              summary: "Get a specific employee by lastname",
              parameters: [
                {
                  name: "lastname",
                  in: "path",
                  description: "Lastname of the employee searched for",
                  schema: {
                    $ref: "#/definitions/Hotel/Employee",
                  },
                },
              ],
              responses: {
                200: {
                  description: "OK",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/definitions/Hotel/Employee",
                      },
                    },
                  },
                },
                404: {
                  description: "Employee Not found",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/definitions/Hotel/Employee",
                      },
                    },
                  },
                },
                500: {
                    description: "Server Not found",
                    content: {
                      "application/json": {
                        schema: {
                          $ref: "#/definitions/Hotel/Employee",
                        },
                      },
                    },
                  }
              },
            },
          },
        "/add": {
          post: {
            tags: ["Employee"],
            summary: "Add a new employee",
            parameters: [
              {
                name: "room",
                in: "body",
                description: "Room to be added",
                schema: {
                    $ref: "#/definitions/Hotel/Employee",
                },
              },
            ],
            responses: {
              200: {
                description: "OK",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Employee",
                    },
                  },
                },
              },
              404: {
                description: "Employee Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel/Employee",
                    },
                  },
                },
              },
              500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel/Employee",
                    },
                  },
                },
              },
            },
          },
        },
      },
      definitions: {
        Book: {
          required: ["hote_id", "firstname", "lastname","job"],
          properties: {
            _id: {
              type: "string",
              uniqueItems: true,
            },
            hotel_id: {
              type: "string",
            },
            firstname: {
              type: "string",
            },
            lastname: {
              type: "string",
            },
            job: {
              type: "string",
            },
            work_experience: {
                type: "integer",
              },
          },
        },
      },
      "/change": {
        put: {
          tags: ["Employee"],
          summary: "Change a employee",
          parameters: [
            {
              name: "job", 
              in: "path", 
              schema: {
                $ref: "#/definitions/Hotel/Employee", 
              },
              required: true,
              description: "Job of employee to be updated", 
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel/Employee",
                  },
                },
              },
            },
            404: {
              description: "Employee Not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel/Employee",
                  },
                },
              },
            },
            500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/definitions/Hotel",
                    },
                  },
                },
              }
          },
        },
      },
      "/delte": {
        delete: {
          tags: ["Employees"],
          summary: "delete a  employee",
          parameters: [
            {
              name: "id",
              in: "path",
              schema: {
                $ref: "#/definitions/Hotel/Employee",
              },
              required: true, 
              description: "Deleting a specific Employee", 
            },
          ],
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel/Employee",
                  },
                },
              },
            },
            404: {
              description: "Employee Not found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/definitions/Hotel/Employee",
                  },
                },
              },
            },
            500: {
                description: "Server Not found",
                content: {
                  "application/json": {
                    schema: {
                        $ref: "#/definitions/Hotel/Employee",
                    },
                  },
                },
              }
          },
        },
      },
  };
  
  export default swaggerDocs;
  