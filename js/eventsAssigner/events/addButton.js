export function startTheAddButton()
{
	const list = document.getElementById("itemList");

	if (!list.hasChildNodes()) { list.innerText = "Nothing to show"; }
	else
	{
		if (list.innerText === "Nothing to show") { list.innerText = ""; }
	}
}

export function addButton()
{
	const list = document.getElementById("itemList");
	const input = document.getElementById("inputField");
	const value = input.value.trim();

    if (value)
	{
		startTheAddButton();
        const li = document.createElement("li");
        li.textContent = value;
        list.appendChild(li);
        input.value = "";
    }
}