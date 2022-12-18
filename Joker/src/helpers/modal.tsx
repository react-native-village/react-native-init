import {app} from 'src/services';

export function showModal(modalName: string) {
  app.emit('modal', {type: modalName});
}
