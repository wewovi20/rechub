export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Gallery
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Take a look at our community events, workshops, and the amazing moments we've shared together.
          </p>
        </div>

        {/* Gallery Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://drive.google.com/embeddedfolderview?id=1z-8PSYEi82oFZO_qeFn3xYrYTEQ9P1H_#grid"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
              title="RecHub Gallery"
            ></iframe>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to see more? Follow us on social media for live updates and behind-the-scenes content.
          </p>
        </div>
      </div>
    </section>
  );
}