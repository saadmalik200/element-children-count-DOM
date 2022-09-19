const wrapper = document.getElementById("wrapper");
console.log(wrapper.children);
console.log(Array.from(wrapper.children).length);
Array.from(wrapper.children).forEach((item) => {
  console.log(item);
});

Array.from(wrapper.children).forEach((item) => console.log(item.children));

console.log(`-----------------------------------------`);
//////////////

function checkLength() {
  let result = 0;
  let element = [];
  let obj = {};
  let maxNum = 0;
  Array.from(wrapper.children).forEach((item) => {
    result += item.classList.length;
  });
  Array.from(wrapper.children).forEach((el) => {
    console.log(el.classList.length);
    element.push(el.classList.length);
    element.sort((a, b) => b - a);
    maxNum = element[0];
  });
  console.log(maxNum);
  obj.mostClasses = maxNum;
  obj.totalClasses = result;

  //   console.log(result);
  console.log(obj);
}

checkLength();
