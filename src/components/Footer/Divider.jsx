
function Divider() {
  return (
    <div className="border-t border-gray-800 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} La Vie Rose M&J. All rights reserved.
        </p>
        <p className="text-center md:text-right">
          Designed with love for unforgettable moments
        </p>
      </div>
    </div>
  );
}

export default Divider;
