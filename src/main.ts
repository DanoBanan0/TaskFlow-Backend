import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- Configuración de Swagger ---
  const config = new DocumentBuilder()
    .setTitle('TaskFlow API')
    .setDescription('Documentación de la API para el gestor de proyectos TaskFlow')
    .setVersion('1.0')
    .addTag('users') // Podemos agregar tags para organizar rutas luego
    .addTag('projects')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // La documentación estará disponible en /api/docs
  SwaggerModule.setup('api/docs', app, document);
  // -------------------------------

  // Habilitar CORS para que Next.js pueda conectarse después
  app.enableCors();

  await app.listen(3000);
}
bootstrap();