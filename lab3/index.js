const year = {
  jan: { 1: "Сайхан амарна" },
  feb: {
    1: "Сагсны тэмцээнтэй",
    3: "Шагнал гардуулна даа",
    17: "Жавхлан багшийн лаб 2-ыг хийнэ",
  },
  mar: {
    2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ",
    6: "Энд юу бичье дээ байз",
    8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ",
  },
  apr: { 1: "Бүгдээрээ худлаа ярьцаагаагаарай" },
  may: { 10: "Энэ сард ч ёстой юу ч болдоггүй сар даа" },
  jun: { 6: "Жавхлан багшийн төрсөн өдөр" },
  jul: { 4: "Хичээл амарсаан ураа" },
  aug: { 1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ" },
  sep: { 1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа" },
  oct: { 13: "Сур сур бас дахин сур" },
  nov: { 2: "Сурсаар л бай" },
  dec: {
    20: "Өвлийн семистер хаагдах нь дээ",
    30: "Дүн гаргаж дууслаа баярлалаа баяртай",
  },
};

const date = new Date(2021, 0, 1);

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  let month = months[date.getMonth()];
  let eventsMonth;

  for (let [key, events] of Object.entries(year)) {
    if (key == month) {
      eventsMonth = events;
      console.log(eventsMonth);
    }
  }

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date(date).toDateString().substring(3, 8) + " " + new Date(date).toDateString().substring(11, 16);

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    let hasEvent = false;
    for (let [key, event] of Object.entries(eventsMonth)) {
      if (key == i) {
        hasEvent = true;
        days += `<div class="hasEvent"><div class="day">${i}</div><div class="event">${event}</div></div>`;
      }
    }
    if (!hasEvent) days += `<div>${i}</div>`;
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  if (date < new Date(2021, 1, 1)) return;
    date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  if (date > new Date(2021, 10, 1)) return;
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});


renderCalendar();

function searchEvent() {
  let searchInput = document.getElementsByClassName("searchInput")[0].value;

  console.log(searchInput)
  for (let [key, events] of Object.entries(year)) {
    let month =key;
    console.log(month)
    for (let [key, event] of Object.entries(events)) {
      if(event.includes(searchInput)) {
        switch (month) {
          case "jan": {
            date.setMonth(0);
            break;
          }
          case "feb": {
            date.setMonth(1);
            break;
          }
          case "mar": {
            date.setMonth(2);
            break;
          }
          case "apr": {
            date.setMonth(3);
            break;
          }
          case "may": {
            date.setMonth(4);
            break;
          }
          case "jun": {
            date.setMonth(5);
            break;
          }
          case "jul": {
            date.setMonth(6);
            break;
          }
          case "aug": {
            date.setMonth(7);
            break;
          }
          case "sep": {
            date.setMonth(8);
            break;
          }
          case "oct": {
            date.setMonth(9);
            break;
          }
          case "nov": {
            date.setMonth(10);
            break;
          }
          case "dec": {
            date.setMonth(11);
            break;
          }
        }
        
        renderCalendar();
      }
    }
  }
}