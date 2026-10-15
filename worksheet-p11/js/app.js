import { state, muatState } from "./state.js";
import { render } from "./dom.js";
import { pasangPendengar } from "./events.js";

function jalankanAplikasi() {
    muatState();
    render(state);
    pasangPendengar();
}

jalankanAplikasi();
