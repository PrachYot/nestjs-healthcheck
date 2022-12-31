# Healtcheck Module

A NestJS module to provide healthcheck endpoints for your application.

Implementation purpose

1. Reduce project setup time
2. Reduce project onboarding time
3. Help lean your base project

## Installation

```sh
yarn add @prachyot/nestjs-healthcheck
```

## Usage

```ts
import { HealthcheckModule } from '@prachyot/nestjs-healthcheck';
...

@Module({
  imports: [
    HealthcheckModule
    ...
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## Endpoints

```postman
http://localhost:3000/<api-prefix>/healthcheck
```
