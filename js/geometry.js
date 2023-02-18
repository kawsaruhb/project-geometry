// Triangle calculation 
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleFieldElement = document.getElementById('triangle-field-1');
    const triangleFieldValueString = triangleFieldElement.value;
    const triangleFieldValue1 = parseFloat(triangleFieldValueString);

    const triangleFieldElement2 = document.getElementById('triangle-field-2');
    const triangleFieldValueString2 = triangleFieldElement2.value;
    const triangleFieldValue2 = parseFloat(triangleFieldValueString2);

    const triangleArea = 0.5 * triangleFieldValue1 * triangleFieldValue2;

    const areaResult = document.getElementById('result-triangle');
    areaResult.innerText = triangleArea;
    

})

