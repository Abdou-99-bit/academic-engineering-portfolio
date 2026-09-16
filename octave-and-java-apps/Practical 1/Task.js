
let russianDay = prompt("Введите день недели на русском (Понеделник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье):");

russianDay = russianDay.toLowerCase();


let englishDay;

switch (russianDay) {
    case "понеделник":
        englishDay = "Monday";
        break;
    case "вторник":
        englishDay = "Tuesday";
        break;
    case "среда":
        englishDay = "Wednesday";
        break;
    case "четверг":
        englishDay = "Thursday";
        break;
    case "пятница":
        englishDay = "Friday";
        break;
    case "суббота":
        englishDay = "Saturday";
        break;
    case "воскресенье":
        englishDay = "Sunday";
        break;
    default:
        englishDay = "Invalid input. Please enter a valid day of the week in Russian.";
        break;
}

alert("The day in English is: " + englishDay);
