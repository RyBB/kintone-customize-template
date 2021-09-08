(() => {
  'use strict';

  kintone.events.on('app.record.index.show', (event) => {
    console.log(event);

    const div = document.createElement('div');
    div.id = 'hello';
    div.textContent = 'hello world';
    kintone.app.getHeaderMenuSpaceElement().appendChild(div);

    return event;
  });
})();
