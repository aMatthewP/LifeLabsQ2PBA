//Calls main function when window loads
window.onload = main;

// Functions sets up accordion button event listeners
function SetupAccordionButton()
{
	document.querySelectorAll(".accordion-button").forEach(button => 
	{
		button.addEventListener("click", () => 
			{
				const accordionContent = button.nextElementSibling;

				button.classList.toggle("accordion-button-active");
				if (button.classList.contains("accordion-button-active"))
				{
					accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
				}
				else
				{
					accordionContent.style.maxHeight = 0;
				}

			});
		button.addEventListener("resize", () => 
			{
				console.log("Resize Event");
				const accordionContent = button.nextElementSibling;
				if (button.classList.contains("accordion-button-active"))
				{
					accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
				}
			});
	});
	window.onresize = () => {
		document.querySelectorAll(".accordion-button").forEach(button => {
			const accordionContent = button.nextElementSibling;
			if (button.classList.contains("accordion-button-active"))
			{
				accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
			}
		});
	};
}

/*
*		THE MAIN FUNCTION
*	where the code will be executed
* */

function main() 
{
	SetupAccordionButton();
}
