
function click1() {
    let f1 = document.getElementsByName("field1");
    let quantity = parseInt(f1[0].value); // Получаем количество
    let r = document.getElementById("result");
    let s = document.getElementsByName("select1");

    // Проверяем, какой товар выбран
    if (quantity > 0) {
        if (s[0].value === "v1") { 
            r.innerHTML = quantity * 30000 + " руб."; 
    } 
        else if (s[0].value === "v2") { 
            r.innerHTML = quantity * 50000 + " руб."; 
    }
        else if (s[0].value === "v3") { 
            r.innerHTML = quantity * 40000 + " руб."; 
    }
    }

    else errorMessage.textContent = "Пожалуйста, введите корректное количество больше нуля.";
    return false; 
}
