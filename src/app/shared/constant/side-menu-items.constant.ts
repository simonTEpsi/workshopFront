import { MenuItems } from '../models/menu-items.model';

export const sideMenuItems: MenuItems[] = [
    {
        id: 1,
        label: 'Dashboard',
        icon: 'dashboard',
        subItems: [
            {
                id: 1,
                label: 'Dashboard', 
                redirect: '/dashboard'
            }
        ]
    }, {
        id: 2,
        label: 'Visiteurs',
        icon: 'account_circle',
        subItems: [
            {
                id: 1,
                label: 'Récapitalutif',
                redirect: '/visiteurs/recap'

            }, {
                id: 2,
                label: 'Utilisateur',
                redirect: '/visiteurs/users'
            }, {
                id: 3,
                label: 'Journal des visites',
                redirect: '/visiteurs/time'
            }, {
                id: 4,
                label: 'Temps réel',
                redirect: '/visiteurs/time'
            }, {
                id: 5,
                label: 'Géographgie',
                redirect: '/visiteurs/geo'
            }, {
                id: 6,
                label: 'Périphériques',
                redirect: '/visiteurs/periphs'
            }, {
                id: 7,
                label: 'Personnalisation',
                redirect: '/visiteurs/perso'
            }
        ]
    }, {
        id: 3,
        label: 'Objectifs',
        icon: 'gps_fixed',
        subItems: []
    }, {
        id: 4,
        label: 'Comportement',
        icon: 'notifications',
        subItems: []
    }, {
        id: 5,
        label: 'A/B Tests',
        icon: 'construction',
        subItems: []
    }, {
        id: 6,
        label: 'Partage',
        icon: 'groups',
        subItems: []
    }, {
        id: 7,
        label: 'Personnalisation',
        icon: 'palette',
        subItems: []
    }
];
