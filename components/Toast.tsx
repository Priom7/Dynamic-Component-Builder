
import { toast } from 'react-toastify';

export const showToast = (message: string, type: 'success' | 'error' | 'info') => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'info':
      toast.info(message);
      break;
    default:
      toast(message);
      break;
  }
};
  