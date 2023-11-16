import { NestFactory } from "@nestjs/core"
import {createMainModule } from "./main.module"

export const main = async () => {
  const appModule = createMainModule()
  const application = await NestFactory.create(appModule)
  await application.listen(3000)
}