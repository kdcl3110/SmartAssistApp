import { Toast } from 'native-base';
import Colors from '../../../native-base-theme/variables/commonColor';

export const showToast = (message, type, position = 'bottom', style = { marginHorizontal: 5 }) => {
  Toast.show({
    text: message,
    type,
    duration: 4000,
    position,
    style,
  });
};
export const show = (message) => {
  showToast(message, 'default');
};
export const showSuccess = (message, position = 'bottom', sticky = false) => {
  const style = { backgroundColor: Colors.brandPrimary };
  showToast(message, 'success', position, style, sticky);
};
export const showInfo = (message, position = 'bottom', sticky = false) => {
  showToast(message, 'info', position, sticky);
};

export const showWarning = (message, position = 'bottom') => {
  showToast(message, 'warning', position);
};
export const showError = (message, position = 'bottom') => {
  showToast(message, 'danger', position);
};
