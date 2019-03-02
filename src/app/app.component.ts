import {Component} from '@angular/core';
import {Model, TodoItem} from './model';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    model = new Model();

    public getName(): any {
        return this.model.user;
    }

    public getTodoItems(): any[] {
        return this.model.items.filter(item => !item.done);
    }

    public addItem(newItem) {
        if (newItem !== '') {
            this.model.items.push(new TodoItem(newItem, false));
        }
    }
}
