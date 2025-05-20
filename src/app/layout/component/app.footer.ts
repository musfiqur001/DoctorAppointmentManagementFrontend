import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        Developed by
        <a href="https://musfiqur001.github.io/" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Musfiqur Rahman</a>
    </div>`
})
export class AppFooter {}
