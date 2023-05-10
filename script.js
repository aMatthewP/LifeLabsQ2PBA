//Calls main function when window loads
window.onload = main;

//Initalize global variables
let slideIndex = 0;
let videoIndex = 0;

/*
*		THE MAIN FUNCTION
*	where the code will be executed
* */

function main()
{
	slideIndex = Math.floor(document.querySelectorAll(".carousel-images > img").length / 2);
	SetupAccordionButton();
	SetupImageCarousel();
	SetupVideoImageCarousel();
}

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

//Setups Image Carousel and adds Event Listeners
function SetupImageCarousel() {
	if (document.querySelectorAll(".carousel-images > img").length === 0)
		return;

	document.querySelectorAll(".carousel-images > img")[slideIndex].style.display = "block";
	document.querySelectorAll(".carousel-button-previous").forEach(button => 
	{
		button.addEventListener("click", () => 
		{	
			if (slideIndex === 0)
				return;

			const images = document.querySelectorAll(".carousel-images > img");

			images[slideIndex--].style.display = "none";
			images[slideIndex].style.display = "block";
		});
	});
	document.querySelectorAll(".carousel-button-next").forEach(button =>
	{
		button.addEventListener("click", () =>
		{
			const images = document.querySelectorAll(".carousel-images > img");

			if (slideIndex === images.length - 1)
				return;

			images[slideIndex++].style.display = "none";
			images[slideIndex].style.display = "block";
		})
	})
}

function SetupVideoImageCarousel() {
	if (document.querySelectorAll(".advertisment-video").length === 0)
		return;

	document.querySelectorAll(".advertisment-video")[videoIndex].style.display = "block";

	document.querySelectorAll(".video-preview> .left").forEach(button =>
	{
		button.addEventListener("click", () => 
			{
				if (videoIndex === 0)
					return;

				const videos = document.querySelectorAll(".advertisment-video");

				videos[videoIndex--].style.display = "none";
				videos[videoIndex].style.display = "block";
			})
	});

	document.querySelectorAll(".video-preview> .right").forEach(button =>
	{
		button.addEventListener("click", () => 
			{
				const videos = document.querySelectorAll(".advertisment-video");

				if (videoIndex === videos.length - 1)
					return;
				
				videos[videoIndex++].style.display = "none";
				videos[videoIndex].style.display = "block";

			})
	});

}
