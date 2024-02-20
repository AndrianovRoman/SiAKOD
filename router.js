import {Dek} from "./src/dek.js";
import {Stek} from "./src/stek.js";
import {Ochered} from "./src/ochered.js";

export class Router {
    constructor() {
        this.routes = [
            {
                route: '#/',
                title: 'Главная',
                template: 'templates/index.html',
                load: () => {
                }
            },
            {
                route: '#/stek',
                title: 'Стек',
                template: 'templates/stek.html',
                load: () => {
                    new Stek();
                }
            },
            {
                route: '#/dek',
                title: 'Дек',
                template: 'templates/dek.html',
                load: () => {
                    new Dek();
                }
            },
            {
                route: '#/ochered',
                title: 'Очередь',
                template: 'templates/ochered.html',
                load: () => {
                    new Ochered();
                }
            },
        ]
    }

    async openRoute() {
        const newRoute = this.routes.find(item => {
            return item.route === window.location.hash;
        });

        if(!newRoute) {
            window.location.href = '#/';
            return;
        }

        document.getElementById('content').innerHTML =
            await fetch(newRoute.template).then(response => response.text());

        document.getElementById('page-title').innerText = newRoute.title;
        newRoute.load();

    }
}