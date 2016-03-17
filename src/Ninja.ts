import {inject} from "inversify";
import {IKatana} from "./Katana";
import {IShuriken} from "./Shuriken";

export interface INinja {
    fight(): string;
    sneak(): string;
}

@inject("IKatana", "IShuriken")
export class Ninja implements INinja {

    private _katana: IKatana;
    private _shuriken: IShuriken;

    public constructor(katana: IKatana, shuriken: IShuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };
}