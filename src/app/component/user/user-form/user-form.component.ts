import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../model/user.interface';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  confirmButton = 'Save';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      location: '',
      email: '',
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id && id.length > 0) {
        this.userService.getUser(Number(id)).subscribe((user: any) => {
          if (user) {
            this.userForm.patchValue(user);
            this.confirmButton = 'Update';
          }
        });
      }
    });
  }

  onSubmit() {
    if (this.confirmButton === 'Update') {
      this.userService.updateUser(this.userForm.value);
      return this.router.navigate(['/user/table']);
    }

    if (this.confirmButton === 'Save') {
      const payload = {
        id: 0,
        firstName: this.userForm.get('firstName')!.value || '',
        lastName: this.userForm.get('lastName')!.value || '',
        age: this.userForm.get('age')!.value || '',
        gender: this.userForm.get('gender')!.value || '',
        location: this.userForm.get('location')!.value || '',
        email: this.userForm.get('email')!.value || '',
      };
      this.userService.addUser(payload);
      return this.router.navigate(['/user/table']);
    }
  }

  onCancel() {
    console.log('cancel');
    return this.router.navigate(['/user/table']);
  }
}
