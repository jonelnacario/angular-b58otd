import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user.interface';
import { UserService } from '../../../service/user.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'age',
    'gender',
    'location',
    'email',
    'actions',
  ];

  dataSource = new MatTableDataSource<User>();
  //dataSource;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getAllUser();

    this.userService.getUser(1).subscribe((data: any) => {
      console.log(data);
    });
  }

  getAllUser() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
    });
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe((data: any) => {
      this.getAllUser();
    });
  }

  updateUser(id: any) {
    console.log('updateUser', id);
    this.router.navigate(['/user/update', id]);
  }

  createUser() {
    console.log('login');
    this.router.navigate(['/user/create']);
  }
}
