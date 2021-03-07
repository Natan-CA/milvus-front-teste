import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router"
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

export interface User {
  cpf: String,
  rg: String,
  nome: String,
  sobrenome: String,
  email: String,
  senha: String,
  data_nascimento: Date,
  telefone: String,
  celular: String,
  ativo: Boolean,
  cep: String,
  endereco: String,
  numero: Number,
  complemento: String,
  bairro: String,
  cidade: String,
  uf: String
}

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {
  displayedColumns: string[] = ['cpf', 'nome', 'e-mail', 'status', 'celular', 'cep', 'acoes'];
  userDataSource: MatTableDataSource<User>

  loading: boolean = true;
  dialogRef: MatDialogRef<ConfirmationDialogComponent>;
  filterForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private toast: ToastrService,
    public dialog: MatDialog,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm()
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      console.log(response)
      this.userDataSource = new MatTableDataSource(response)
      this.loading = false
    }, err => {
      console.log(err)
    })
  }

  getUserData(user) {
    //console.log(user)
    sessionStorage.setItem('user-details', JSON.stringify(user))
    this.router.navigate(['/main/detalhes-usuario'])
  }

  editUser(user) {
    sessionStorage.setItem('user-details', JSON.stringify(user))
    this.router.navigate(['/main/editar-usuario'])
  }

  createUser() {
    this.router.navigate(['/main/criar-usuario'])
  }

  deleteUser(id, nome) {
    var title = `Deseja realmente deletar o usuário de ${nome}?`;

    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmTitle = title;

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true
        this.userService.deleteUser(id).subscribe(response => {
          if (response.status == 204) {
            this.toast.success('Usuário excluído com sucesso!', 'Sucesso')
            this.getUsers()
          }
        })
      }
    })
  }

  onSubmit() {
    if (this.filterForm.invalid) {
      this.toast.error('Formulário de filtros inválido!', 'Erro')
      console.log(this.filterForm)
      return;
    }

    this.loading = true
    let form = this.filterForm.value

    let cpf = form.cpf
    let nome = form.nome
    let email = form.email
    let ativo = form.ativo == undefined ? '' : form.ativo

    console.log(ativo)

    this.userService.getFilteredUsers(nome, cpf, email, ativo).subscribe(response => {
      this.userDataSource = new MatTableDataSource(response)
      this.loading = false
    }, err => {
      console.log(err)
    })
  }

  buildForm() {
    this.filterForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: ['', Validators.email],
      ativo: [''],
    })
  }

}
