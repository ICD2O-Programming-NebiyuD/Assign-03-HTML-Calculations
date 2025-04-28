// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input length and width
    let width = parseInt(document.getElementById('width-of-triangle').value);
    let height = parseInt(document.getElementById('height-of-triangle').value);
    let length = parseInt(document.getElementById('length-of-triangle').value);
  // calculate area
  // process
  // let area = (sideA * sideB) / H2;
  // process
  let area = 2 *(width * length + height * length + width * height);
  let volume = height * length * width
    
  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
    document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' cm³'
    
}

