(() => {
  if (typeof HTMLDialogElement === 'undefined') return;
  const nativeShowModal = HTMLDialogElement.prototype.showModal;
  HTMLDialogElement.prototype.showModal = function safeShowModal() {
    if (!this.open) nativeShowModal.call(this);
  };
})();
