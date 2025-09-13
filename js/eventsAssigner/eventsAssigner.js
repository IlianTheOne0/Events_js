import { changeFon } from "./events/changeBackColor.js";
import { startTheAddButton, addButton } from "./events/addButton.js";
import { ToHoverImage, ToDefaultImage } from "./events/hoverImage.js";
import { incrementClickCount } from "./events/clickCounter.js";
import { submitForm } from "./events/form.js";

function assignChangeBackColorEvent() { document.getElementById("changeButtonBackColor").addEventListener("click", changeFon); }
function assignAddButton() { startTheAddButton(); document.getElementById("addButton").addEventListener("click", addButton); }
function assignHoverImage()
{
    const hoverImage = document.getElementById("hoverImage");

    hoverImage.addEventListener("mouseover", ToHoverImage);
    hoverImage.addEventListener("mouseout", ToDefaultImage);
}
function assignClickCounter() { document.getElementById("clickCounterButton").addEventListener("click", incrementClickCount); }
function assignFormSubmit() { document.getElementById("submitButton").addEventListener("click", submitForm); }

export function assignEvents()
{
	assignChangeBackColorEvent();
	assignAddButton();
	assignHoverImage();
	assignClickCounter();
	assignFormSubmit();
}