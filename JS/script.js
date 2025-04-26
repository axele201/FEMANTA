// qoute
const quotes = [
    {
      text: "“There is no limit to what we, as women, can accomplish.”",
      author: "Michelle Obama"
    },
    {
      text: "“The most courageous act is still to think for yourself. Aloud.”",
      author: "Coco Chanel"
    },
    {
      text: "“Healing isn’t about becoming the best version of yourself. It’s about letting the real you be seen.”",
      author: "Anonim"
    },
    {
      text: "“Self-care is how you take your power back.”",
      author: "Lalah Delia"
    },
    {
      text: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
      author: "Ralph Waldo Emerson"
    }
  ];

  let index = 0;

  setInterval(() => {
    const quote = quotes[index];
    document.getElementById("quote-text").innerText = quote.text;
    document.getElementById("quote-author").innerHTML = `<cite title="Source Title">${quote.author}</cite>`;
    index = (index + 1) % quotes.length;
  }, 5000);

// fiture branding
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });