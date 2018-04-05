/* Loader JS*/
$(function() {
    $(".loader").fadeOut(2000, function() {
        $(".content").fadeIn(1000);
    });
});

/*Body JS */
// function

var toArray = function toArray(nodeList) {
  return Array.from(nodeList);
};

var isActiveClass = function isActiveClass(array, activeClass) {
  return array.find(function (elem) {
    return elem.className.includes(activeClass);
  });
};

// find content selector by id equal to className target link
var findContent = function findContent(arrayContent, target) {
  return arrayContent.find(function (content) {
    return content.id === target.className;
  });
};

// slider function
function initSlider(parentLinkList, linkList, contentList) {
  var menu = document.querySelector(parentLinkList);
  var menuList = document.querySelectorAll(linkList);
  var dataContentList = document.querySelectorAll(contentList);
  dataContentList[0].classList.add('active');
  menuList[1].classList.add('active-link');

  var onClickMenu = function onClickMenu() {

    menu.addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.target.nodeName !== 'LI' ? e.target.parentNode : null;
      var foundContent = findContent(toArray(dataContentList), target);
      var isActiveContent = isActiveClass(toArray(dataContentList), 'active');
      var isActiveLink = isActiveClass(toArray(menuList), 'active-link');
      if (foundContent && isActiveContent) {
        isActiveLink.classList.remove('active-link');
        isActiveContent.classList.remove('active');}
      target.classList.add('active-link');
      foundContent.classList.add('active');
    });
  };

  onClickMenu();
}

initSlider('.menu', '.menu > li', '.main > section');
