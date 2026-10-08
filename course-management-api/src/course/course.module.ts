import { Module } from '@nestjs/common';
import { CourseController } from './course.controller.js';

@Module({
  controllers: [CourseController]
})
export class CourseModule {}
