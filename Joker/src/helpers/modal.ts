import {app} from 'src/services';

export function showModal(modalName: string) {
  app.emit('modal', {type: modalName});
}

export function hideModal(modalName: String | null = null) {
  app.emit('hideModal', {type: modalName});
}

export function showLoadingWithText(text: string) {
  app.emit('modal', {type: 'loading', text: text});
}
