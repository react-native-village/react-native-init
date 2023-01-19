import { getStorybookUI } from '@storybook/react-native';
import './storybook.requires';
const StorybookUIRoot = getStorybookUI({
    //initialSelection: { kind: 'components/Text', name: 'font_type_00' }
});
export default StorybookUIRoot;