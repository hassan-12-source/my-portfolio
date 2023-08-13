$(document).ready(function () {
  let options = {
    startAngle: -1.55,
    size: 150,
    fill: { gradient: ['#a445b2', '#fa4299'] }
  };

  // Circle 1 (HTML)
  
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue){
      $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
  
  $(".wrapper .circle.html .bar").circleProgress({
    ...options,
    value: 0.90
  });

  // Circle 2 (CSS)
  $(".wrapper .circle.css .bar").circleProgress({
    ...options,
    value: 0.70
  });

  // Circle 3 (JavaScript)
  $(".wrapper .circle.javascript .bar").circleProgress({
    ...options,
    value: 0.65
  });

  // Circle 4 (React)
  $(".wrapper .circle.react .bar").circleProgress({
    ...options,
    value: 0.60
  });

  // Circle 5 (Git)
  $(".wrapper .circle.git .bar").circleProgress({
    ...options,
    value: 0.80
  });

  // Circle 6 (GitHub)
  $(".wrapper .circle.github .bar").circleProgress({
    ...options,
    value: 0.85
  });
});

// Filter caregory 

document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");

  filterButtons.forEach(button => {
      button.addEventListener("click", function() {
          const category = this.getAttribute("data-category");

          // Hide all cards
          cards.forEach(card => {
              card.classList.add("hide");
          });

          // Show cards of the selected category
          if (category === "all") {
              cards.forEach(card => {
                  card.classList.remove("hide");
              });
          } else {
              const filteredCards = document.querySelectorAll(`.card[data-category="${category}"]`);
              filteredCards.forEach(card => {
                  card.classList.remove("hide");
              });
          }
      });
  });
});
