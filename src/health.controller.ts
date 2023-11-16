import { Controller, Get } from "@nestjs/common"

@Controller()
export class HealthController {
  @Get('health/readiness')
  async readiness(): Promise<void> { }
}