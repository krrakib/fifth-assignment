// scrolling releted js code
document.addEventListener('DOMContentLoaded', function() {
    var scrollButton = document.getElementById('scrollButton');
    var ticketingSection = document.getElementById('ticketingSection');
  
    scrollButton.addEventListener('click', function() {
        ticketingSection.scrollIntoView({ behavior: 'smooth' });
    });
  });



// seat selection releted js code
// document.addEventListener('DOMContentLoaded', function () {
//     let seatsLeft = 36;
//     let selectedSeats = 0;

//     let seatButtons = document.querySelectorAll('.seat-button');
//     let seatsLeftDisplay = document.getElementById('seats-left');
//     let seatCountDisplay = document.getElementById('seat-count');

//     seatButtons.forEach(function (seatButton) {
//         seatButton.addEventListener('click', function () {
//             if (!seatButton.classList.contains('selected')) {
//                 if (selectedSeats < 4) {
//                     seatButton.classList.add('selected');
//                     seatsLeft--;
//                     selectedSeats++;
//                     updateSeatDisplay();
//                 } else {
//                     alert('You can only select up to 4 seats.');
//                 }
//             } else {
//                 seatButton.classList.remove('selected');
//                 seatsLeft++;
//                 selectedSeats--;
//                 updateSeatDisplay();
//             }
//         });
//     });

//     function updateSeatDisplay() {
//         seatsLeftDisplay.textContent = seatsLeft + ' seats left';
//         seatCountDisplay.textContent = 'Seat ' + selectedSeats;
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    let seatsLeft = 36;
    let selectedSeats = [];
    let totalPriceValue = document.getElementById('total-price-value');
    let couponInput = document.getElementById('coupon-input');
    let applyCouponBtn = document.getElementById('apply-coupon-btn');
    let grandTotalSection = document.getElementById('grand-total');
  
    let seatButtons = document.querySelectorAll('.seat-button');
    let seatsLeftDisplay = document.getElementById('seats-left');
    let seatCountDisplay = document.getElementById('seat-count');
    let selectedSeatsSection = document.getElementById('selected-seats');
  
    seatButtons.forEach(function(seatButton) {
      seatButton.addEventListener('click', function() {
        if (!seatButton.classList.contains('selected')) {
          if (selectedSeats.length < 4) {
            seatButton.classList.add('selected');
            seatsLeft--;
            selectedSeats.push(seatButton.textContent);
            updateSeatDisplay();
            displaySelectedSeats();
            updateTotalPrice();
          } else {
            alert('You can only select up to 4 seats.');
          }
        } else {
          seatButton.classList.remove('selected');
          seatsLeft++;
          let index = selectedSeats.indexOf(seatButton.textContent);
          if (index !== -1) {
            selectedSeats.splice(index, 1);
          }
          updateSeatDisplay();
          displaySelectedSeats();
          updateTotalPrice();
        }
      });
    });
  
    function updateSeatDisplay() {
      seatsLeftDisplay.textContent = seatsLeft + ' seats left';
      seatCountDisplay.textContent = 'Seat ' + selectedSeats.length;
    }
  
    function displaySelectedSeats() {
      selectedSeatsSection.innerHTML = ''; // Clear existing content
      selectedSeats.forEach(function(seat) {
        let seatElement = document.createElement('div');
        seatElement.textContent = seat + '   |   Class: Iconomy   |   Price: 550';
        seatElement.classList.add('selected-seat');
        selectedSeatsSection.appendChild(seatElement);
      });
    }
  
    function updateTotalPrice() {
      let totalPrice = selectedSeats.length * 550; // Assuming each seat costs BDT550
      totalPriceValue.textContent = totalPrice;
    }
  
    applyCouponBtn.addEventListener('click', function() {
      let couponCode = couponInput.value.trim();
      if (couponCode === 'NEW15') {
        let totalPrice = parseInt(totalPriceValue.textContent);
        let discountedPrice = totalPrice * 0.85; // 15% discount
        totalPriceValue.textContent = discountedPrice.toFixed(2);
        couponInput.style.display = 'none'; // Hide coupon input field
        applyCouponBtn.style.display = 'none'; // Hide apply coupon button
        grandTotalSection.style.display = 'block'; // Show grand total section
      } else if (couponCode === 'Couple20') {
        let totalPrice = parseInt(totalPriceValue.textContent);
        let discountedPrice = totalPrice * 0.80; // 20% discount
        totalPriceValue.textContent = discountedPrice.toFixed(2);
        couponInput.style.display = 'none'; // Hide coupon input field
        applyCouponBtn.style.display = 'none'; // Hide apply coupon button
        grandTotalSection.style.display = 'block'; // Show grand total section
      } else {
        alert('Invalid coupon code');
      }
    });
  });
  