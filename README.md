# AngEmplSimple

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Add bootstrap
Run `npm install bootstrap --save` and then import it to the styles.css file.
We could also imported it using the cdn inside index.html

Display Employees List
    create an employee (typescript) class : `ng g class employee`
    create an employee component : `ng g c employee`
    create an employee service : `ng g s employee`
    HttpClientModule (in app.module) to call the Rest endpoint
        & inject HttpClient in employee service
        & inject EmployeeService in employee-list
Create Employee
    In order to use ngModel directive, we have to import FormsModule in app.module