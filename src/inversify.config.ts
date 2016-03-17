import {Kernel} from "inversify";

import {INinja, Ninja} from "./Ninja";
import {IKatana, Katana} from "./Katana";
import {IShuriken, Shuriken} from "./Shuriken";

var kernel = new Kernel();
kernel.bind<INinja>("INinja").to(Ninja);
kernel.bind<IKatana>("IKatana").to(Katana);
kernel.bind<IShuriken>("IShuriken").to(Shuriken);

export default kernel;