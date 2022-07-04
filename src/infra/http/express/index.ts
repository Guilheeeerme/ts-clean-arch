import express, { Express, Request, Response } from "express";

import { CreateRouteUseCase } from "../../../application/create-route.use-case";
import { ListAllRoutesUseCase } from "../../../application/list-all-routes.use-case";
import { RouteInMemoryRepository } from "../../db/route-in-memory.repository";

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const routeRepo = new RouteInMemoryRepository();

app.get("/routes", async (request: Request, response: Response) => {
  const listAllRoutesUseCase = new ListAllRoutesUseCase(routeRepo);
  const output = await listAllRoutesUseCase.execute();

  response.json(output);
});

app.post("/routes", async (request: Request, response: Response) => {
  const createUseCase = new CreateRouteUseCase(routeRepo);
  const output = await createUseCase.execute(request.body);

  response.status(201).json(output);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
