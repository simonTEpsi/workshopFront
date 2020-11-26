export class Page {
    id: number;
    label: string;
    pertinence: number;

    constructor(id, label, pertinence) {
        this.id = id;
        this.label = label;
        this.pertinence = pertinence;
    }
}