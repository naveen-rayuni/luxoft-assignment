module.exports = {
    post: {
      tags: ["User Management"],
      description: "Login User",
      operationId: "UserLogin",
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserLogin",
            },
          },
        },
      },
      responses: {
        200: {
          description: "User object will be fetched",
        },
        500: {
          description: "User not found.",
        },
      },
    },
  };