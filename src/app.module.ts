import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { FlashMiddleware } from "./common/middlewares/flash.middleware";
import { OldMiddleware } from "./common/middlewares/old.middleware";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FlashMiddleware, OldMiddleware).forRoutes("*");
  }
}
