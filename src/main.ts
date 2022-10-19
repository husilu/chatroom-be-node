import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 添加全局返回参数
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
// 异常处理
// 捕获所有异常
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
// 只捕获HTTP相关的异常错误
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
import { generateDocument } from './doc';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());
  generateDocument(app)
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(3000);
}
bootstrap();
