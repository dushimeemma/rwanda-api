import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getWelcome(@Res() res: Response) {
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Welocme To Rwanda API', status: 'OK', data: null });
  }
}
