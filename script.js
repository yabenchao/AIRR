// 功能一：顯示輸入的名字
function showValue() {
    let value = document.getElementById("myInput").value;
    console.log(value);
    document.getElementById("result").textContent = value;
}

// 功能三：判斷時間
function showAgo() {
    let age = document.getElementById("ji394su3").value;
    let message = "";
    
    if (age >= 23) {
        message = "去睡覺";
    } else {
        message = "玩電腦!!";
    }
    
    console.log(message);
    document.getElementById("ageResult").textContent = message;
}

// 功能二：產生自我介紹
function generateIntro() {
    let name = document.getElementById("introName").value;
    let hobby = document.getElementById("introHobby").value;
    let birthday = document.getElementById("introBirthday").value;
    
    let resultText = `我是 ${name}，我的興趣是 ${hobby}，生日是 ${birthday}。`;
    document.getElementById("introResult").textContent = resultText;
}

// 功能四：乘法公式計算
function calculateMath() {
    let a = Number(document.getElementById("numA").value);
    let b = Number(document.getElementById("numB").value);
    
    let squareSum = Math.pow(a + b, 2);       
    let squareDiff = Math.pow(a - b, 2);      
    let sumOfSquares = Math.pow(a, 2) + Math.pow(b, 2); 
    let diffOfSquares = Math.pow(a, 2) - Math.pow(b, 2); 
    
    let resultHTML = `
        (a + b)² = ${squareSum} <br>
        (a - b)² = ${squareDiff} <br>
        a² + b² = ${sumOfSquares} <br>
        a² - b² = ${diffOfSquares}
    `;
    
    document.getElementById("mathResult").innerHTML = resultHTML;
}
