import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../view/Tarefas.vue'
import Projetos from '../view/Projetos.vue'
import Formulario from '../view/Projetos/Formulario.vue'
import Lista from '../view/Projetos/Lista.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    }, 
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo Projetos',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: Formulario,
                props: true
            },
        ]
        
    }
]

const roteador = createRouter ({
    history: createWebHistory(),
    routes: rotas
})

export default roteador;