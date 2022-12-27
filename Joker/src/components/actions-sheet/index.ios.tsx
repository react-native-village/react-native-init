import React, {useEffect} from 'react';

import {ActionSheetIOS} from 'react-native';

import {ActionsSheetProps} from './index';

export function ActionsSheet({
  onPressDiscard,
  onPressKeepEditing,
}: ActionsSheetProps) {
  useEffect(() => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          /* getText(I18N.actionSheetKeepEditing),
          getText(I18N.actionSheetDiscard), */
          'Keep editing',
          'Discard Changes',
        ],
        title:
          'Are you sure you want to discard your changes?' /* getText(I18N.actionSheetMessage) */,
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          onPressKeepEditing?.();
        } else if (buttonIndex === 1) {
          onPressDiscard?.();
        }
      },
    );
  }, [onPressKeepEditing, onPressDiscard]);
  return <></>;
}
