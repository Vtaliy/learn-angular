import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserServices} from '../../shared/services/user.services';
import {User} from '../../shared/models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    form: FormGroup;
    // pipe
    public name = 'WebForVySelf';
    public pi = Math.PI;
    public money = 350;
    public date = new Date();
    public amunt = 0.45;
    public object = {
        foo: 'bar',
        baz: 'qux',
        nested:
            {
                xyz: 3,
                numbers: [1, 2, 3]
            }
    };
    constructor(
        private readonly userServices: UserServices
    ) {}

    ngOnInit() {
        this.createForm();
    }

    onSubmit() {
        // const formData = this.form.value;
        // this.userServices.getUserByEmail(formData.email)
        //     .subscribe((user: User) => {
        //         console.log(user);
        // });
        console.log(this.createForm);
    }

    public createForm(): void {
        this.form = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }
}
