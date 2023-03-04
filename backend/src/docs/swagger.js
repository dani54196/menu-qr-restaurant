const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api description",
      version: "1.0.0",
      description: "API documentation using Swagger",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: "Dev server",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Replace with the path to your route files
};

export default swaggerOptions;
