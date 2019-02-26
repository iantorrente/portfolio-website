function pageViewController() {
  //Factory function that handles which content to render based on which link is clicked
  $('nav').on('click', 'a', event => {
    let pageToLoad = $(event.currentTarget).text();
      let element = document.getElementById(pageToLoad.toLowerCase());
      console.log(element);
      element.scrollIntoView(true);
  });

}

function pageController() {
  //Function meant to only hold pageViewController() and any other factory functions
  pageViewController();
}

$(pageController);
