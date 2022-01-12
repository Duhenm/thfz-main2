  const button = document.querySelector('.menu__burger-button');
  const aside = document.querySelector('.menu__nav')
     
  button.addEventListener('click', (e) => {
    button.classList.toggle('menu__burger-button_active');
    aside.classList.toggle('menu__nav_active')
  });

const counters = document.querySelectorAll('.number__title');
console.log (counters);
const speed = 96; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = Math.round(target / speed);

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 30);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
