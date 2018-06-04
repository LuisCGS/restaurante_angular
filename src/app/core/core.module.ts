import { NgModule } from "@angular/core";
import { ShoppingCartService } from "../restaurants/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { OrderService } from "../order/order.service";

@NgModule({
    providers: [ShoppingCartService, RestaurantsService, OrderService]
})
export class CoreModule{}