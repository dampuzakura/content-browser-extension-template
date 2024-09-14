import "./styles.css";
import { getContentHtml } from "./content";

document.body.innerHTML += `<div id="extension-root">${getContentHtml()}</div>`;
