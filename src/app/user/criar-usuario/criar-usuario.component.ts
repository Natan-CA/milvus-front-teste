import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private toast: ToastrService
  ) { }

  createUserForm: FormGroup;

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.createUserForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ativo: [false, Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
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
  }

  returnToList() {
    this.router.navigate(['/main/listagem-de-usuarios'])
  }


  onSubmit() {
    let form = this.createUserForm

    if (form.get('senha').value != form.get('confirmarSenha').value) {
      this.toast.error('Senhas diferentes!', 'Erro')
      return;
    }

    if (this.createUserForm.invalid) {
      this.toast.error('Formulário inválido!', 'Erro')
      console.log(this.createUserForm)
      return;
    }
    let payload = {
      "cpf": this.createUserForm.value.cpf,
      "rg": this.createUserForm.value.rg,
      "nome": this.createUserForm.value.nome,
      "sobrenome": this.createUserForm.value.sobrenome,
      "email": this.createUserForm.value.email,
      "senha": this.createUserForm.value.senha,
      "data_nascimento": new Date(this.createUserForm.value.dob),
      "telefone": this.createUserForm.value.telefone,
      "celular": this.createUserForm.value.celular,
      "ativo": this.createUserForm.value.ativo,
      "cep": this.createUserForm.value.cep,
      "endereco": this.createUserForm.value.endereco,
      "numero": parseInt(this.createUserForm.value.numero),
      "complemento": this.createUserForm.value.complemento,
      "bairro": this.createUserForm.value.bairro,
      "cidade": this.createUserForm.value.cidade,
      "uf": this.createUserForm.value.estado
    }


    console.log(payload)
    this.userService.createUser(payload).subscribe(response => {
      console.log(response)
      if (response.id !== null) {
        this.toast.success('Usuário criado com sucesso!', 'Sucesso')
        this.returnToList()
      }
    }, err => {
      console.log(err)
      this.toast.error('Ops! Parece que ocorreu algum erro', 'Erro')
    })
  }

}
