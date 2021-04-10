(() => {
  'use strict';

  kintone.events.on('app.record.index.show', (event) => {
    console.log(event);

    const div = document.createElement('div');
    div.textContent = 'hello world';
    kintone.app.record.getHeaderMenuSpaceElement().appendChild(div);

    return event;
  });
})();
