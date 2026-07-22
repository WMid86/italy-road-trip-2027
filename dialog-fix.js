(() => {
  if (typeof HTMLDialogElement !== 'undefined') {
    const nativeShowModal = HTMLDialogElement.prototype.showModal;
    HTMLDialogElement.prototype.showModal = function safeShowModal() {
      if (!this.open) nativeShowModal.call(this);
    };
  }

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'media.css';
  document.head.appendChild(stylesheet);

  const contentScript = document.createElement('script');
  contentScript.src = 'content-links.js';
  contentScript.async = false;
  document.body.appendChild(contentScript);
})();
