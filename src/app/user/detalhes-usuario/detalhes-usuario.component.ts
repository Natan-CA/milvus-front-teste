import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-detalhes-usuario',
  templateUrl: './detalhes-usuario.component.html',
  styleUrls: ['./detalhes-usuario.component.scss']
})
export class DetalhesUsuarioComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private toast: ToastrService,
    public dialog: MatDialog,
    ) { }

  user: any = {}
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;

  ngOnInit(): void {
    this.getUserDetails()
    console.log(this.user)
  }
  
  getUserDetails(){
    this.user = JSON.parse(sessionStorage.getItem('user-details'))
  }

  returnToList(){
    this.router.navigate(['/main/listagem-de-usuarios'])
  }

  editUser(){
    this.router.navigate(['/main/editar-usuario'])
  }

  deleteUser(id, nome) {
    var title = `Deseja realmente deletar o usuário de ${nome}?`;

    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmTitle = title;

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(id).subscribe(response => {
          if (response.status == 204) {
            this.toast.success('Usuário excluído com sucesso!', 'Sucesso')
            this.returnToList()
          }
        })
      }
    })
  }
}
