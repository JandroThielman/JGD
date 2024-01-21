document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      "Om iets te bereiken moet je er veel moed en steun in hebben anders kom je niet ver.",
      "Dean en jandro en junior houden van programmeren en samenwerken.",
      "Familie is waar het leven begint maar liefde nooit eindigt.",
      "De enige manier om iets geweldigs te doen, is door van iets geweldigs te houden.",
      "Java script is best wel moeilijk om te leren doe het daarom in kleine stapjes."
    ];
  
    function getRandomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
  
    function startTest() {
      const quoteElement = document.getElementById('quote');
      const inputElement = document.getElementById('input');
      const resultElement = document.getElementById('result');
  
      const quote = getRandomQuote();
      quoteElement.textContent = quote;
      inputElement.value = '';
      inputElement.disabled = false;
      resultElement.textContent = '';
  
      const startTime = new Date().getTime();
  
      inputElement.addEventListener('input', function () {
        const typedText = inputElement.value;
        if (typedText === quote) {
          const endTime = new Date().getTime();
          const totalTime = (endTime - startTime) / 1000; // in seconds
          const wordsPerMinute = Math.round((quote.split(' ').length / totalTime) * 60);
  
          resultElement.textContent = `Je typte de tekst correct! Je typesnelheid is ${wordsPerMinute} woorden per minuut.`;
          inputElement.disabled = true;
        }
      });
    }
  
    window.startTest = startTest; // Maak de functie beschikbaar in de browserconsole
  });
  