function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  // console.log(li);
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a");
    // console.log(a);
    if (a[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
      console.log(a[0].innerHTML.toUpperCase().indexOf(filter));
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

var linkItem = document.querySelectorAll(".link-item");
var linkContent = document.querySelectorAll(".link-content");
// console.log(linkItem);
// console.log(linkContent);
for (let i = 0; i < linkItem.length; i++) {
  linkItem[i].addEventListener("click", function () {
    // console.log(linkItem[i]);
    for (let i = 0; i < linkItem.length; i++) {
      linkItem[i].classList.remove("active");
      linkContent[i].style.display = "none";
    }
    this.classList.add("active");
    linkContent[i].style.display = "block";
  });
}

// var icon = document.querySelectorAll(".icon");
// for (var i = 0; i < icon.length; i++) {
//   icon[i].addEventListener("click", function () {
//     console.log("I am from AddEventLisenar click function");
//     for (let i = 0; i < icon.length; i++) {
//       icon[i].classList.remove("active");
//     }
//     this.classList.add("active");
//   });
// }

// function myFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("mySearch");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myMenu");
//   li = ul.getElementsByTagName("li");
//   for (let i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       console.log(a.innerHTML.toUpperCase().indexOf(filter));
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
