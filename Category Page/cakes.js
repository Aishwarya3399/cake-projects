      const cakes = [
        {
          id: 1,
          name: "Chocolate Cake",
          weight: "1 kg",
          eggOrEggless: "Eggless",
          availability: "In Stock",
          price: 500,
          rating: 4.7,
          image: "../Media/DC.jpg",
          description: "Delicious chocolate cake",
          },
         {
          id: 2,
          name: "Vanilla Cake",
          weight: "1.5 kg",
          eggOrEggless: "With Egg",
          availability: "In Stock",
          price: 600,
          rating: 4.5,
          image: "../Media/VCC.webp",
          description: "Delicious vanilla cake",
        },
        {
          id: 3,
          name: "Black-Forest Cake",
          weight: "0.5 kg",
          eggOrEggless: "With Egg",
          availability: "In Stock",
          price: 350,
          rating: 4.5,
          image: "../Media/HCC.jpg",
          description: "Delicious Black-Forest cake",
        },
        {
          id: 4,
          name: "Red Velvet Cake",
          weight: "5 kg",
          eggOrEggless: "Eggless",
          availability: "In Stock",
          price: 4000,
          rating: 4.5,
          image: "../Media/CH.jpg ",
          description: "Delicious Red Velvet cake",
        },
        {
          id: 5,
          name: "Chocolate Caremal Cake",
          weight: "4 kg",
          eggOrEggless: "With Egg",
          availability: "OIn Stock",
          price: 3200,
          rating: 4.5,
          image: "../Media/CC1.jpg",
          description: "Delicious Chocolate Caremal cake",
        },
        {
          id: 6,
          name: "Black Current Cake",
          weight: "3 kg",
          eggOrEggless: "Eggless",
          availability: "Out of Stock",
          price: 2700,
          rating: 4.5,
          image: "../Media/CC2.jpg",
          description: "Delicious Black Current cake",
        },
        {
          id: 7,
          name: "Butter Cake",
          weight: "2.5 kg",
          eggOrEggless: "With Egg",
          availability: "Out of Stock",
          price: 2200,
          rating: 4.5,
          image: "../Media/BCC.jpg",
          description: "Delicious Butter cake",
        },
        {
          id: 8,
          name: "Jelly Ice Cake",
          weight: "2 kg",
          eggOrEggless: "With Egg",
          availability: "In Stock",
          price: 1600,
          rating: 4.5,
          image: "../Media/BB.webp",
          description: "Delicious Ice cake",
        },
        {
          id: 9,
          name: "Fruit Cake",
          weight: "2 kg",
          eggOrEggless: "With Egg",
          availability: "In Stock",
          price: 1600,
          rating: 4.5,
          image: "../Media/fresh fruit.webp",
          description: "Delicious Ice cake",
        },

        // Add more cakes as needed
      ];

      document.addEventListener('DOMContentLoaded', function() {
        const cakeId = parseInt(new URLSearchParams(window.location.search).get('cakeId'));
        const cake = cakes.find(c => c.id === cakeId);
        
        if (cake) {
          document.getElementById('cake-name').innerText = cake.name;
          document.getElementById('cake-weight').innerText = cake.weight;
          document.getElementById('cake-eggOrEggless').innerText = cake.eggOrEggless;
          document.getElementById('cake-availability').innerText = cake.availability;
          document.getElementById('cake-price').innerText = `₹ ${cake.price}`;
          document.getElementById('cake-rating').innerText = `Rating: ${cake.rating}`;
          document.getElementById('cake-image').src = cake.image;
          document.getElementById('cake-description').innerText = cake.description;
        } else {
          document.getElementById('product-info').innerText = "Cake not found!";
        }
      });