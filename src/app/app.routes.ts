import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Avisos } from './avisos/avisos';
import { Galeria } from './galeria/galeria';
import { Contacto} from './contacto/contacto';

export const routes: Routes = [
    {path: 'inicio', component: Inicio},
    {path: 'avisos', component: Avisos},
    {path: 'galeria', component: Galeria},
    {path: 'contacto', component: Contacto},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
