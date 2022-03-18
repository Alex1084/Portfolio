import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name: 'pipePerso' })
export class PipePerso implements PipeTransform {

    transform(value: string) {
        return value.split(' ').slice(0, 2).join(' ') + '...'
    }
}

// creation du pipe, pour la classe suivre ce shema puis l'ajouter dans les imports sur le app-module