export interface IShuriken {
    throw();
}

export class Shuriken implements IShuriken {
    public throw() {
        return "hit!";
    }
}