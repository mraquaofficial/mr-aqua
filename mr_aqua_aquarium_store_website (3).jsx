export default function MRAquaWebsite() {
  const fishes = [
    {
      name: 'Gold Fish',
      price: '₹50',
      image:
        'https://freshwateraquatica.org/cdn/shop/products/lg_39507_Fantail_Goldfish_Red_450x450.jpg?v=1693570381',
    },
    {
      name: 'Betta Fish',
      price: '₹200',
      image:
        'https://www.coastgemusa.com/cdn/shop/files/Rosetail_Over_Halfmoon_Super_red_Male_Betta.jpg?v=1748651269&width=800',
    },
    {
      name: 'Angel Fish',
      price: '₹100',
      image:
        'https://aquaticsunlimited.com/wp-content/uploads/2023/07/ANGELFISH-FW-MARBLE-Pterophyllum-scalare-1.jpg',
    },
    {
      name: 'Guppy Fish',
      price: '₹150',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjPMCVzDA_axumVPsZiUzzGfdTPkewwV2sA&s',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-blue-50 to-white text-gray-800">
      {/* Header */}
      <header className="bg-cyan-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.imgur.com/yXOvdOS.png"
              alt="MR AQUA Logo"
              className="w-14 h-14 object-contain bg-white rounded-full p-1"
            />
            <h1 className="text-3xl font-extrabold tracking-wide">MR AQUA</h1>
          </div>
          <nav className="hidden md:flex gap-8 text-lg font-medium">
            <a href="#home" className="hover:text-cyan-200 transition">
              Home
            </a>
            <a href="#shop" className="hover:text-cyan-200 transition">
              Shop
            </a>
            <a href="#about" className="hover:text-cyan-200 transition">
              About
            </a>
            <a href="#contact" className="hover:text-cyan-200 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-cyan-900 text-white"
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Beautiful Aquarium Fishes For Your Home
            </h2>
            <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
              Discover premium aquarium fishes, tanks, and accessories at MR AQUA.
              Bring life, color, and peace into your space.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-cyan-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Shop Now
              </button>
              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-cyan-700 transition">
                Explore More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1520637836862-4d197d17c35a?q=80&w=1200&auto=format&fit=crop"
              alt="Aquarium"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Fish Collection */}
      <section id="shop" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold text-cyan-800 mb-4">
            Popular Aquarium Fishes
          </h3>
          <p className="text-gray-600 text-lg">
            Healthy and colorful aquarium fishes carefully selected for aquarium lovers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fishes.map((fish, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={fish.image}
                alt={fish.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h4 className="text-2xl font-bold text-cyan-800 mb-2">
                  {fish.name}
                </h4>
                <p className="text-xl font-semibold text-gray-700 mb-4">
                  {fish.price}
                </p>

                <button className="w-full bg-cyan-700 text-white py-3 rounded-2xl font-semibold hover:bg-cyan-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-cyan-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1520301255226-bf5f144451c1?q=80&w=1200&auto=format&fit=crop"
            alt="Fish Store"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h3 className="text-4xl font-bold text-cyan-800 mb-6">
              About MR AQUA
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              MR AQUA is your trusted aquarium fish store. We provide healthy,
              vibrant fishes and high-quality aquarium accessories for beginners
              and professionals.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to create beautiful underwater worlds for every
              home and office.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h3 className="text-4xl font-bold text-center text-cyan-800 mb-10">
            Contact Us
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full mt-6 border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-800 transition">
              Send Message
            </button>

            <a
              href="https://wa.me/917675014663"
              target="_blank"
              className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-700 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-900 text-cyan-100 py-8 text-center">
        <div className="mb-4 space-y-2">
          <p>📞 Phone: 7675014663</p>
          <p>💬 WhatsApp: 7675014663</p>
          <p>📍 Jaggannapeta, Tadepaligudem Mandal, West Godavari, Andhra Pradesh</p>
        </div>
        <h4 className="text-2xl font-bold mb-2">MR AQUA</h4>
        <p>Your trusted aquarium fish partner.</p>
        <p className="mt-4 text-sm text-cyan-300">
          © 2026 MR AQUA. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
