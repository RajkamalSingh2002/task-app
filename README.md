# task-app — Angular 21 Lab

A simple Angular 21 task management application built as part of ITE-5425.

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
# OR if Angular CLI is installed globally:
ng serve

# 3. Open browser
# http://localhost:4200
```

## Project Structure

```
src/
  app/
    components/
      header/        # Nav component with RouterLink
        header.ts
        header.html
      footer/        # Footer component
        footer.ts
      task/          # Task card with @Input + @Output
        task.ts      # TaskType interface + @Input task + @Output delete
        task.html
        task.css
      tasklist/      # Parent container using signals
        tasklist.ts  # signal<TaskType[]> + addTask + deleteTask
        tasklist.html  # @for loop + template ref inputs
        tasklist.css
    app.ts           # Root component
    app.routes.ts    # Angular Router routes
    app.config.ts    # provideRouter + provideZoneChangeDetection
  main.ts            # bootstrapApplication
  index.html
  styles.css         # Global styles
```

## Key Angular 21 Features Used

| Feature | Where Used |
|---|---|
| Standalone components | All components |
| Signals (`signal<T>`) | Tasklist state management |
| `@for` block | tasklist.html loop |
| `@if` block | Empty state message |
| `@Input()` | task.ts receives task from tasklist |
| `@Output()` + EventEmitter | task.ts emits delete to tasklist |
| RouterModule + routerLink | header.html navigation |
| Template reference variables | `#title`, `#desc` inputs |

## Component Communication

```
Tasklist (parent)
  |
  |-- [task]="task"       @Input  --> Task (child)
  |<- (delete)="deleteTask()"  @Output <-- Task (child)
```

## Steps Followed

1. Installed Angular CLI globally: `npm install -g @angular/cli@latest`
2. Created project: `ng new task-app` (CSS, no SSR)
3. Generated components: header, footer, task, tasklist
4. Defined `TaskType` interface in task.ts
5. Used `signal<TaskType[]>()` for reactive state in Tasklist
6. Implemented `@Input() task` and `@Output() delete` in Task component
7. Used Angular 17+ `@for` control flow in templates
8. Configured routing with `app.routes.ts`
9. Wired everything in `app.ts` with `RouterModule`

## Challenges

- Angular 21 uses standalone components by default — no NgModule needed
- Signals replace `useState` from React but require `.set()` / `()` call syntax
- `@for` / `@if` block syntax is new in Angular 17+ (replaces `*ngFor` / `*ngIf`)
- TypeScript strict mode requires explicit types on all signals and outputs
