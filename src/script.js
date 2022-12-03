window.onload = main; //Calls main function when window loads

/*
*
*		THE MAIN FUNCTION
*	where the code will be executed
* */

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
	});
}

function main() 
{
	SetupAccordionButton();
	
}
