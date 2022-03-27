let slideIndex = 1;
showSlides(slideIndex);

// control next/previous
function plusSlides(n)
{
    showSlides(slideIndex += n);
}

// control thumbnails
function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if(n > slides.length)
    {
        slideIndex = 1;
    }
    if(n < 1)
    {
        slideIndex = slides.length;
    }
    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].getElementsByClassName.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}