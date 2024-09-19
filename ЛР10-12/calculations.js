// calculator.js

/**
 * Функция для расчета выражения по формуле
 * @param {number} x - Угол в радианах для функции sin и cos
 * @param {number} y - Угол в радианах для функции sin и cos
 * @returns {number} - Результат расчета
 */
function calculateExpression(x, y) {
    // Проверяем, что cos(x) и cos(y) не равны нулю, чтобы избежать деления на ноль
    if (Math.cos(x) === 0 || Math.cos(y) === 0) {
        throw new Error("Cosine of x or y is zero. Division by zero is not allowed.");
    }
    
    // Расчет по формуле
    const numerator = Math.sin(x) + Math.cos(y);
    const denominator = Math.cos(x) - Math.sin(y);
    const result = (numerator / denominator) * Math.tan(x * y);
    
    return result;
}

/**
 * Функция для отображения результатов в HTML-документе
 * @param {number} x - Угол в радианах для функции sin и cos
 * @param {number} y - Угол в радианах для функции sin и cos
 */
function displayResult(x, y) {
    try {
        const result = calculateExpression(x, y);
        document.getElementById('result').innerHTML = `Результат расчета: ${result.toFixed(2)}`;
    } catch (error) {
        document.getElementById('result').innerHTML = `Ошибка: ${error.message}`;
    }
}