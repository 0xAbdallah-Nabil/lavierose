function BurgerIcons({ setIsOpen, isOpen, className }) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`md:hidden text-3xl focus:outline-none ${className}`}
    >
      ☰
    </button>
  );
}

export default BurgerIcons;
