import app from "../src/app.js";
import request from "supertest";

describe("index router", () => {
  test("the should response a status 200", async () => {
    const response = await request(app).get("/").send();
    console.log(response);
  });
});
