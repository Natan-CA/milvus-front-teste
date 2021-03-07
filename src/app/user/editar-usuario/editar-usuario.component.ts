import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss'],
  providers: [DatePipe]
})
export class EditarUsuarioComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private toast: ToastrService
  ) { }

  user: any = {}
  editUserForm: FormGroup;

  ngOnInit(): void {
    this.getUserDetails()
    this.buildForm()
  }

  getUserDetails() {
    this.user = JSON.parse(sessionStorage.getItem('user-details'))
  }

  buildForm() {
    this.editUserForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: [''],
      ativo: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      telefone: ['', Validators.required],
      celular: ['', Validators.required],
      cep: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    })
    this.populateForm(this.user)
  }

  populateForm(user) {
    this.editUserForm.patchValue({
      nome: user.nome,
      sobrenome: user.sobrenome,
      dob: user.data_nascimento,
      email: user.email,
      senha: user.senha,
      ativo: user.ativo,
      cpf: user.cpf,
      rg: user.rg,
      telefone: user.telefone,
      celular: user.celular,
      cep: user.cep,
      endereco: user.endereco,
      numero: user.numero,
      complemento: user.complemento,
      bairro: user.bairro,
      cidade: user.cidade,
      estado: user.uf,
    });
    //this.editUserForm.get('dob').setValue(formatDate(user.data_nascimento,'yyyy-MM-dd','en-US'));
  }

  returnToList() {
    this.router.navigate(['/main/listagem-de-usuarios'])
  }

  onSubmit() {
    let form = this.editUserForm
    if (form.get('confirmarSenha').value !== "" || form.get('senha').value !== this.user.senha) {
      if (form.get('senha').value != form.get('confirmarSenha').value) {
        this.toast.error('Senhas diferentes!', 'Erro')
        return;
      }
    }

    if (this.editUserForm.invalid) {
      this.toast.error('Formulário inválido!', 'Erro')
      console.log(this.editUserForm)
      return;
    }
    let payload = {
      "cpf": this.editUserForm.value.cpf,
      "rg": this.editUserForm.value.rg,
      "nome": this.editUserForm.value.nome,
      "sobrenome": this.editUserForm.value.sobrenome,
      "email": this.editUserForm.value.email,
      "senha": this.editUserForm.value.senha,
      "data_nascimento": new Date(this.editUserForm.value.dob),
      "telefone": this.editUserForm.value.telefone,
      "celular": this.editUserForm.value.celular,
      "ativo": this.editUserForm.value.ativo,
      "cep": this.editUserForm.value.cep,
      "endereco": this.editUserForm.value.endereco,
      "numero": parseInt(this.editUserForm.value.numero),
      "complemento": this.editUserForm.value.complemento,
      "bairro": this.editUserForm.value.bairro,
      "cidade": this.editUserForm.value.cidade,
      "uf": this.editUserForm.value.estado
    }

    let id = this.user._id

    console.log(payload)
    this.userService.editUser(payload, id).subscribe(response => {
      console.log(response)
      if (response.status == 204) {
        this.toast.success('Usuário editado com sucesso!', 'Sucesso')
        this.returnToList()
      }
    }, err => {
      console.log(err)
      this.toast.error('Ops! Parece que ocorreu algum erro', 'Erro')
    })
  }

}
