export function submitForm()
{
	const value = document.getElementById("formInput").value;

	if (value === "") { alert("Input is empty! Please enter a value"); return; }
	else { document.body.style.backgroundColor = "#00ff00"; }
}