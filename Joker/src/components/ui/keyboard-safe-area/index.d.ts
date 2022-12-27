import {ViewProps} from 'react-native';

export interface KeyboardSafeAreaProps extends ViewProps {
  isNumeric?: boolean;
}

export function KeyboardSafeArea(props: KeyboardSafeAreaProps): JSX.Element;
