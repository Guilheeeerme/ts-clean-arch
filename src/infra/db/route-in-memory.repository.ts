import { RouteRepositoryInterface } from "../../domain/route.repository";
import { Route } from "../../domain/routes.entity";

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  items: Route[] = [];

  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.items;
  }
}
