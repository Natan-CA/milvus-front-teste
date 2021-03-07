import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiEExemplosComponent } from './api-e-exemplos/api-e-exemplos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListagemUsuarioComponent } from "./user/listagem-usuario/listagem-usuario.component";
import { DetalhesUsuarioComponent } from "./user/detalhes-usuario/detalhes-usuario.component";
import { EditarUsuarioComponent } from './user/editar-usuario/editar-usuario.component'
import { CriarUsuarioComponent } from "./user/criar-usuario/criar-usuario.component";
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main', component: NavigationComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'api-e-exemplos',
        component: ApiEExemplosComponent
      },
      {
        path: 'listagem-de-usuarios',
        component: ListagemUsuarioComponent,
      },
      {
        path: 'detalhes-usuario',
        component: DetalhesUsuarioComponent
      },
      {
        path: 'editar-usuario',
        component: EditarUsuarioComponent
      },
      {
        path: 'criar-usuario',
        component: CriarUsuarioComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
