function getFirstInputFieldById(inputId){
    const fieldElement = document.getElementById(inputId);
    const fieldValueString = fieldElement.value;
    const fieldValue1 = parseFloat(fieldValueString);  
    return fieldValue1;
}

function getSecondInputField2ById(inputId){
    const fieldElement2 = document.getElementById(inputId);
    const fieldValueString2 = fieldElement2.value;
    const fieldValue2 = parseFloat(fieldValueString2);
    return fieldValue2;
}

// ---------------------- Triangle calculation --------------------------//
document.getElementById('btn-triangle').addEventListener('click', function(){
   
    const triangleFieldValue1 = getFirstInputFieldById('triangle-field-1');
    const triangleFieldValue2 = getSecondInputField2ById('triangle-field-2');

    if(isNaN(triangleFieldValue1) || isNaN(triangleFieldValue2)){
        alert('Invalid input');
        return;
    }
    else if(triangleFieldValue1 < 0 || triangleFieldValue2 < 0){
        alert('Invalid input');
    }

    const triangleArea = (0.5 * triangleFieldValue1 * triangleFieldValue2).toFixed(2);

    const areaResult = document.getElementById('result-triangle');
    areaResult.innerText = triangleArea;
})

// --------------------- Rectangle calculation ---------------------------//
document.getElementById('btn-rectangle').addEventListener('click', function(){
   
    const rectangleFieldValue1 = getFirstInputFieldById('rectangle-field-1');
    const rectangleFieldValue2 = getSecondInputField2ById('rectangle-field-2');

    if(isNaN(rectangleFieldValue1) || isNaN(rectangleFieldValue2)){
        alert('Invalid input');
        return;
    }
    else if(rectangleFieldValue1 < 0 || rectangleFieldValue2 < 0){
        alert('Invalid input');
        return;
    }

    const rectangleArea = (rectangleFieldValue1 * rectangleFieldValue2).toFixed(2);

    const areaResult = document.getElementById('result-rectangle');
    areaResult.innerText = rectangleArea;
})

//-------------------- Parallelogram calculation --------------------------//
document.getElementById('btn-parallelogram').addEventListener('click', function(){
   
    const parallelogramFieldValue1 = getFirstInputFieldById('parallelogram-field-1');
    const parallelogramFieldValue2 = getSecondInputField2ById('parallelogram-field-2');

    if(isNaN(parallelogramFieldValue1) || isNaN(parallelogramFieldValue2)){
        alert('Invalid input');
        return;
    }
    else if(parallelogramFieldValue1 < 0 || parallelogramFieldValue2 < 0){
        alert('Invalid input');
    }

    const parallelogramArea = (parallelogramFieldValue1 * parallelogramFieldValue2).toFixed(2);

    const areaResult = document.getElementById('result-parallelogram');
    areaResult.innerText = parallelogramArea;
})

// ----------------------- Rhombus calculation ------------------------------//
document.getElementById('btn-rhombus').addEventListener('click', function(){
   
    const rhombusFieldValue1 = getFirstInputFieldById('rhombus-field-1');
    const rhombusFieldValue2 = getSecondInputField2ById('rhombus-field-2');

    if(isNaN(rhombusFieldValue1) || isNaN(rhombusFieldValue2)){
        alert('Invalid input');
        return;
    }
    else if(rhombusFieldValue1 < 0 || rhombusFieldValue2 < 0){
        alert('Invalid input');
    }

    const rhombusArea = (0.5 * rhombusFieldValue1 * rhombusFieldValue2).toFixed(2);

    const areaResult = document.getElementById('result-rhombus');
    areaResult.innerText = rhombusArea;
})

// ------------------------ Pentagon calculation ----------------------------//
document.getElementById('btn-pentagon').addEventListener('click', function(){
   
    const pentagonFieldValue1 = getFirstInputFieldById('pentagon-field-1');
    const pentagonFieldValue2 = getSecondInputField2ById('pentagon-field-2');

    if(isNaN(pentagonFieldValue1) || isNaN(pentagonFieldValue2)){
        alert('Invalid input');
        return;
    }
    else if(pentagonFieldValue1 < 0 || pentagonFieldValue2 < 0){
        alert('Invalid input');
    }

    const pentagonArea = (0.5 * pentagonFieldValue1 * pentagonFieldValue2).toFixed(2);

    const areaResult = document.getElementById('result-pentagon');
    areaResult.innerText = pentagonArea;
})

// ----------------------- Ellipse calculation -----------------------------//
document.getElementById('btn-ellipse').addEventListener('click', function(){
   
    const ellipseFieldValue1 = getFirstInputFieldById('ellipse-field-1');
    const ellipseFieldValue2 = getSecondInputField2ById('ellipse-field-2');

    if(isNaN(ellipseFieldValue1) || isNaN(ellipseFieldValue2)){
        alert('Invalid input');
        return;
    }
    else if(ellipseFieldValue1 < 0 || ellipseFieldValue2 < 0){
        alert('Invalid input');
    }

    const ellipseArea = (3.1416 * ellipseFieldValue1 * ellipseFieldValue2).toFixed(2);

    const areaResult = document.getElementById('result-ellipse');
    areaResult.innerText = ellipseArea;
})