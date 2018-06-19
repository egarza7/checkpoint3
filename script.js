'use strict';

$(document).ready(function(){

  //variable declaration
  var numPizza = 0;
  var pizzaPS = 0;
  var numNovicePizzaiolo = 0;
  var numExpertPizzaiolo = 0;
  var numElitePizzaiolo = 0;
  var numMasterPizzaiolo = 0;
  var novicePizzaioloCost = 10;
  var expertPizzaioloCost = 50;
  var elitePizzaioloCost = 250;
  var masterPizzaioloCost = 1250;

  updateScreen();

  // Increase pizza on click
  $('#produce-pizza').on('click', function () {
      numPizza++;
      updateScreen();
  });

  $('#novice-pizzaiolo').on('click', function () {
      numNovicePizzaiolo++;

      // Deduct cost
      numPizza -= novicePizzaioloCost;

      // Increase cost for the next one, using Math.ceil() to round up
      novicePizzaioloCost = Math.ceil(novicePizzaioloCost * 1.1);

      calcPizza();
  });

  $('#expert-pizzaiolo').on('click', function () {
      numExpertPizzaiolo++;
      numPizza -= expertPizzaioloCost;
      expertPizzaioloCost = Math.ceil(expertPizzaioloCost * 1.1);
      calcPizza();
  });

  $('#elite-pizzaiolo').on('click', function () {
      numElitePizzaiolo++;
      numPizza -= elitePizzaioloCost;
      elitePizzaioloCost = Math.ceil(elitePizzaioloCost * 1.1);
      calcPizza();
  });

  $('#master-pizzaiolo').on('click', function () {
      numMasterPizzaiolo++;
      numPizza -= masterPizzaioloCost;
      masterPizzaioloCost = Math.ceil(masterPizzaioloCost * 1.1);
      calcPizza();
  });

  $('#novice-training').on('click', function () {
      numNovicePizzaiolo-=5;
      numExpertPizzaiolo++;
      calcPizza();
  });

  $('#expert-training').on('click', function () {
      numExpertPizzaiolo-=5;
      numElitePizzaiolo++;
      calcPizza();
  });

  $('#elite-training').on('click', function () {
      numElitePizzaiolo-=5;
      numMasterPizzaiolo++;
      calcPizza();
  });

  function updateScreen () {
      // update pizza, use Math.floor() to round down
      $('#pizza-count').text(Math.floor(numPizza));
      $('#pizza-ps').text(pizzaPS);

      // Enable/disable Upgrade Buttons
      $('#novice-training').prop('disabled', numNovicePizzaiolo < 5);
      $('#expert-training').prop('disabled', numExpertPizzaiolo < 5);
      $('#elite-training').prop('disabled', numElitePizzaiolo < 5);

      // Update pizza prices
      $('#novice-pizzaiolo').text('Hire Novice Pizzaiolo - ' + novicePizzaioloCost);
      $('#expert-pizzaiolo').text('Hire Expert Pizzaiolo - ' + expertPizzaioloCost);
      $('#elite-pizzaiolo').text('Hire Elite Pizzaiolo - ' + elitePizzaioloCost);
      $('#master-pizzaiolo').text('Hire Master Pizzaiolo - ' + masterPizzaioloCost);

      // Enable/disable pizzaiolo buttons
      $('#novice-pizzaiolo').prop('disabled', novicePizzaioloCost > numPizza);
      $('#expert-pizzaiolo').prop('disabled', expertPizzaioloCost > numPizza);
      $('#elite-pizzaiolo').prop('disabled', elitePizzaioloCost > numPizza);
      $('#master-pizzaiolo').prop('disabled', masterPizzaioloCost > numPizza);

      $('#novice-count').text(numNovicePizzaiolo);
      $('#expert-count').text(numExpertPizzaiolo);
      $('#elite-count').text(numElitePizzaiolo);
      $('#master-count').text(numMasterPizzaiolo);

  }

  function calcPizza () {
      pizzaPS = numNovicePizzaiolo * 1;
      pizzaPS += (numExpertPizzaiolo * 2.5);
      pizzaPS += (numElitePizzaiolo * 6);
      pizzaPS += (numMasterPizzaiolo * 15);
      updateScreen();
  }

  // Run UI update code every 10ms
  window.setInterval(function () {

      numPizza += pizzaPS;

      updateScreen();
  }, 1000);



});
