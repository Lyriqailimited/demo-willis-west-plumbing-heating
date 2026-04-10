export default function Home() {
  const services = ["Full central heating systems", "General plumbing", "Maintenance and repairs", "Gas appliances", "Boiler installs"];
  const bookingLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || '#book';

  return (
    <main>
      {/* Hero */}
      <section style={{background:`linear-gradient(135deg, #1e3a5f 0%, #e05a1e 100%)`}} className="min-h-[60vh] flex flex-col items-center justify-center text-white text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Willis-West Plumbing & Heating</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">Glasgow’s trusted plumbing & heating specialists — boiler installs, repairs, and 24/7 service</p>
        <a href="#widget" className="bg-white font-semibold px-8 py-4 rounded-full text-lg transition hover:opacity-90" style={{color:'#1e3a5f'}}>
          Try AI Receptionist
        </a>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Talk to Our AI Receptionist</h2>
          <p className="text-gray-500">Available 24/7 to answer your questions and book appointments.</p>
        </div>
        <div className="max-w-xl mx-auto">
          <iframe src="/widget.html" title="AI Voice Receptionist" width="100%" height="600" style={{border:'none',borderRadius:'12px'}} />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow p-6 border border-gray-100">
                <h3 className="font-semibold text-lg mb-2" style={{color:'var(--primary)'}}>{service}</h3>
                <p className="text-gray-500 text-sm">Professional service delivered by certified engineers.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why an AI Receptionist?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="font-bold text-lg mb-2">24/7 Availability</h3>
              <p className="text-gray-500 text-sm">Never miss a call, even at midnight or on weekends.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-bold text-lg mb-2">Instant Booking</h3>
              <p className="text-gray-500 text-sm">Customers book appointments without waiting on hold.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-lg mb-2">Never Miss a Call</h3>
              <p className="text-gray-500 text-sm">Every enquiry is captured and responded to immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{background:`linear-gradient(135deg, #1e3a5f 0%, #e05a1e 100%)`}}>
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-white opacity-90 mb-8 text-lg">Book a free demo call and see the AI in action.</p>
        <a href={bookingLink} className="bg-white font-semibold px-8 py-4 rounded-full text-lg transition hover:opacity-90" style={{color:'#1e3a5f'}}>
          Book a Demo Call
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-400 text-sm border-t">
        <p>© 2026 Willis-West Plumbing & Heating · Glasgow · 07761 985340</p>
      </footer>
    </main>
  );
}
