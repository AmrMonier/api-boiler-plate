import request from "supertest";
import { describe } from "@jest/globals";
import { Server } from "../../server";
const server = new Server();
const expressAppInstance = server.getInstance();
describe("GET /", () => {
  it("should return 200 OK", async () => {
    const response = await request(expressAppInstance).get("/");
    console.log(response.text, response.status);
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
