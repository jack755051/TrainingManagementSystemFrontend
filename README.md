# TrainingManagementSystemFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## build file and seperate into

/src/app/: 这是应用的主要目录，所有的代码基本上都在这里。
/components/: 通常用于存放 UI 组件，这些组件主要负责展示，并尽量不包含业务逻辑。
/pages 或 /views/: 这个目录通常用于存放容器组件，或者说“页面级”组件。这些组件通常包含其它的 UI 组件，并且包含业务逻辑。
/services/: 用于存放服务（Services），这些是用于数据获取、封装业务逻辑等任务的单例类。
/models/: 用于存放模型（Models）或接口（Interfaces），这些是用于定义数据结构的。
/pipes/: 用于存放管道（Pipes），这些是用于模板中的数据转换。
/directives/: 用于存放指令（Directives）。
/assets/: 用于存放静态资源如图片、字体等。
/environments/: 用于存放不同环境（开发、生产等）的配置。
