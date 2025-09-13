export function changeFon()
{
	function rgb() 
	{
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		return `${r}, ${g}, ${b}`;
	}
	
	document.body.style.backgroundColor = `rgb(${rgb()})`;
}

document.getElementById("changeButtonBackColor").addEventListener("click", changeFon);