var qs = document.querySelectorAll( ".card__questions--question" );
qs.forEach( q =>
{
  q.children[0].addEventListener( "click", () =>
  {
    q.classList.toggle("active")
    q.children[0].children[1].classList.toggle("active")
  } )
} );