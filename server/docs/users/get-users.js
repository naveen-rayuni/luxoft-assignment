module.exports = {
    get: {
      tags: ["User Management"],
      description: "Get Users",
      operationId: "getUsers",
      parameters: [],
      responses: {
        200: {
          description: "Users list is obtained",
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Users",
              },
            },
          },
        },
      },
    },
  };