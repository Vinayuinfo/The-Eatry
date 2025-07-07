import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to The Eatry</h2>
          <p className="text-gray-700 leading-relaxed">
            At <strong>The Eatry</strong>, we believe that food is more than
            just a meal—it’s an experience that brings people together. Founded
            with a passion for culinary excellence and a love for creating
            memorable moments, The Eatry is your go-to destination for delicious
            food, warm hospitality, and a welcoming atmosphere.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            What started as a small dream has grown into a vibrant eatery loved
            by locals and visitors alike. Inspired by traditional recipes and
            modern flavors, we’ve crafted a menu that celebrates the best of
            both worlds. From hearty classics to creative new dishes, each plate
            tells a story of quality ingredients and genuine care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              Serve great food made from fresh, locally-sourced ingredients.
            </li>
            <li>
              Create a space where everyone feels at home, whether you’re here
              for a quick lunch, a family dinner, or a special celebration.
            </li>
            <li>
              Support our community by partnering with local farmers and
              suppliers.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            What Makes Us Different
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              🌿 <strong>Fresh & Local:</strong> We source ingredients from
              nearby farms and markets to ensure every bite bursts with flavor.
            </li>
            <li>
              🍽️ <strong>Chef-Driven Menu:</strong> Our talented chefs combine
              skill and creativity to bring you dishes you’ll crave again and
              again.
            </li>
            <li>
              🤝 <strong>Heartfelt Hospitality:</strong> At The Eatry, you’re
              more than a guest—you’re part of our family. We strive to make
              every visit special.
            </li>
            <li>
              🎉 <strong>A Place for All:</strong> From cozy date nights to
              lively gatherings, our space adapts to your needs with a warm and
              inviting ambiance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re a foodie exploring new tastes, a family making
            memories, or friends catching up over drinks, we’re here to serve
            you with a smile. Come discover why The Eatry is more than just a
            restaurant—it’s a place to eat, laugh, and connect.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
