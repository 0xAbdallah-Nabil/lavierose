function ImportantNote() {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-16">
      <div className="bg-linear-to-r from-purple-50 to-rose-50 rounded-2xl p-8 border-2 border-purple-200">
        <h3 className="text-2xl font-serif text-gray-900 mb-4 flex items-center gap-2">
          <span>📋</span>
          Important Information
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-purple-500 mr-3 text-xl">•</span>
            <span>All packages include setup and pack-down fees</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-3 text-xl">•</span>
            <span>
              Delivery costs will be calculated after confirming the venue
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-3 text-xl">•</span>
            <span>Standard delivery terms and conditions apply</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-500 mr-3 text-xl">•</span>
            <span>
              Optional add-ons are charged separately for all packages
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ImportantNote;
