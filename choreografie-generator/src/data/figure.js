
export class Figure {
    name;
    level;
    startingFoot;
    freeFootAfterFinish;
    startsInPP;
    endsInPP;
    startsInAlignment;
    endsInAlignment;

    constructor(name, level, startingFoot, freeFootAfterFinish, startsInPP, endsInPP, startsInAlignment, endsInAlignment) {
        this.name = name;
        this.level = level;
        this.startingFoot = startingFoot;
        this.freeFootAfterFinish = freeFootAfterFinish;
        this.startsInPP = startsInPP;
        this.endsInPP = endsInPP;
        this.startsInAlignment = startsInAlignment;
        this.endsInAlignment = endsInAlignment;
    }
}