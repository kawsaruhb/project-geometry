function getFirstInputFieldById(inputId){
    const FieldElement = document.getElementById(inputId);
    const FieldValueString = FieldElement.value;
    const FieldValue1 = parseFloat(FieldValueString);
    return FieldValue1;
}

function getSecondInputField2ById(inputId){
    const FieldElement2 = document.getElementById(inputId);
    const FieldValueString2 = FieldElement2.value;
    const FieldValue2 = parseFloat(FieldValueString2);
    return FieldValue2;
}

// ---------------------- Triangle calculation --------------------------//
document.getElementById('btn-triangle').addEventListener('click', function(){
   
    const triangleFieldValue1 = getFirstInputFieldById('triangle-field-1');
    const triangleFieldValue2 = getSecondInputField2ById('triangle-field-2');

    const triangleArea = 0.5 * triangleFieldValue1 * triangleFieldValue2;

    const areaResult = document.getElementById('result-triangle');
    areaResult.innerText = triangleArea;
})

// --------------------- Rectangle calculation ---------------------------//
document.getElementById('btn-rectangle').addEventListener('click', function(){
   
    const rectangleFieldValue1 = getFirstInputFieldById('rectangle-field-1');
    const rectangleFieldValue2 = getSecondInputField2ById('rectangle-field-2');

    const rectangleArea = rectangleFieldValue1 * rectangleFieldValue2;

    const areaResult = document.getElementById('result-rectangle');
    areaResult.innerText = rectangleArea;
})

//-------------------- Parallelogram calculation --------------------------//
document.getElementById('btn-parallelogram').addEventListener('click', function(){
   
    const parallelogramFieldValue1 = getFirstInputFieldById('parallelogram-field-1');
    const parallelogramFieldValue2 = getSecondInputField2ById('parallelogram-field-2');

    const parallelogramArea = parallelogramFieldValue1 * parallelogramFieldValue2;

    const areaResult = document.getElementById('result-parallelogram');
    areaResult.innerText = parallelogramArea;
})

// ----------------------- Rhombus calculation ------------------------------//
document.getElementById('btn-rhombus').addEventListener('click', function(){
   
    const rhombusFieldValue1 = getFirstInputFieldById('rhombus-field-1');
    const rhombusFieldValue2 = getSecondInputField2ById('rhombus-field-2');

    const rhombusArea = 0.5 * rhombusFieldValue1 * rhombusFieldValue2;

    const areaResult = document.getElementById('result-rhombus');
    areaResult.innerText = rhombusArea;
})


