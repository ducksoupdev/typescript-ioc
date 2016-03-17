export interface IKatana {
    hit(): string;
}

export class Katana implements IKatana {
    public hit() {
        return "cut!";
    }
}