module.exports = {
    get: {
      tags: ["User Management"],
      description: "Get Profile",
      operationId: "getUser",
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            $ref: "#/components/schemas/id",
          },
          required: true,
          description: "A single user id",
        },
      ],
      responses: {
        200: {
          description: "User Profile is obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        404: {
          description: "User is not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
  };