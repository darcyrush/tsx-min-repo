import { HealthController } from "./health.controller"
import { DynamicModule } from "@nestjs/common"

class Main { }

export const createMainModule = (): DynamicModule => ({
  module: Main,
  controllers: [
    HealthController
  ]
})