let elForm = document.querySelector(".form")
let elSelect = document.querySelector(".select");
let elCity = document.querySelector(".city");
let elMins = document.querySelector(".mins");
let elDay = document.querySelector(".kun");
let elList = document.querySelector(".list");
let elTemplate = document.querySelector(".template").content;
let newFragment = document.createDocumentFragment();

elForm.addEventListener("click", (evt) => {
    evt.preventDefault();
    let elSelectValue = elSelect.value;
    elCity.textContent = elSelectValue
    fetchFunction(elSelectValue)

})

async function fetchFunction(absd ="Toshkent") {
    elList.innerHTML = "";
    try {
        let res = await fetch(`https://islomapi.uz/api/present/day?region=${absd}`)
        let data = await res.json();
        console.log(data);
        let arr = data.times;
        elDay.textContent = data.date
        let newFragmentClone = elTemplate.cloneNode(true);
        newFragmentClone.querySelector(".times").textContent = arr.tong_saharlik
        newFragmentClone.querySelector(".quyosh").textContent = arr.quyosh
        newFragmentClone.querySelector(".peshin").textContent = arr.peshin
        newFragmentClone.querySelector(".asr").textContent = arr.asr
        newFragmentClone.querySelector(".shom").textContent = arr.shom_iftor
        newFragmentClone.querySelector(".xufton").textContent = arr.hufton
       
        newFragment.appendChild(newFragmentClone)
        elList.appendChild(newFragment)
    } catch (error) {
        console.log(error);
    }
}

fetchFunction()


async function fetchFunctionWeek(absde ="Toshkent") {
    elList.innerHTML = "";
    try {
        let res = await fetch(`ttps://islomapi.uz/api/present/week?region=${absde}`)
        let data = await res.json();
        console.log(data);
        let arr = data.times;
        elDay.textContent = data.date
        let newFragmentClone = elTemplate.cloneNode(true);
        newFragmentClone.querySelector(".item")
        newFragmentClone.querySelector(".times").textContent = arr.tong_saharlik
        newFragmentClone.querySelector(".quyosh").textContent = arr.quyosh
        newFragmentClone.querySelector(".peshin").textContent = arr.peshin
        newFragmentClone.querySelector(".asr").textContent = arr.asr
        newFragmentClone.querySelector(".shom").textContent = arr.shom_iftor
        newFragmentClone.querySelector(".xufton").textContent = arr.hufton
       
        newFragment.appendChild(newFragmentClone)
        elList.appendChild(newFragment)
    } catch (error) {
        console.log(error);
    }
}


fetchFunctionWeek()



















function getDateTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();

    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    var dateTime = hour + ':' + minute;
    return dateTime;
}

setInterval(function () {
    currentTime = getDateTime();
    document.querySelector(".times").innerHTML = currentTime;
}, 1000);


