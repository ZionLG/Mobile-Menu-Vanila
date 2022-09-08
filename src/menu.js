const menuLogic = (() => {
  const _menuSlots = document.getElementById("menu").children;

  const _toggleSelect = (slotTarget) => {
    Array.from(_menuSlots).forEach((slot) => {
      slot.classList.remove("selected");
    });

    slotTarget.classList.add("selected");
  };

  const _setEvents = () => {
    Array.from(_menuSlots).forEach((slot) => {
      slot.addEventListener("click", (e) => _toggleSelect(e.currentTarget));
    });
  };

  _setEvents();
})();

export { menuLogic };
