import {app} from '../contexts/app';

export function showModal(modalName: string) {
    app.emit('modal', {type: modalName});
}
