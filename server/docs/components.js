module.exports = {
    components: {
      schemas: {
        // id model
        id: {
          type: "number",
          description: "An id of a user",
          example: 1,
        },
        // user model
        User: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "User's name",
              example: "John",
            },
            email: {
              type: "string",
              description: "User's email address",
              example: 'john@luxoft.com',
            },
            role: {
              type: "string",
              description: "User's role",
              example: 'ADMIN',
            },
          },
        },
        // users model
        Users: {
          type: "array",
          items: {
            $ref: "#/components/schemas/User"
          }
        },
        // User Login Model
        UserLogin: {
          type: "object",
          properties: {
            email: {
              type: "string",
              description: "User's email address",
              example: 'john@luxoft.com',
            },
            password: {
              type: "string",
              description: "User's password",
              example: '*********',
            },
          },
        },
        // error model
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Error message",
              example: "Not found", // example of an error message
            },
            internal_code: {
              type: "string",
              description: "Error internal code",
              example: "Invalid parameters", // example of an error internal code
            },
          },
        },
      },
    },
  };