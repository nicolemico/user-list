import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const buttonClass =
  'focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2';

export const swalAlert = ({
  title = '',
  html = '',
  icon,
  toast = false,
  showCancelButton = false,
}: SwalProps) => {
  return MySwal.fire({
    title,
    html,
    icon: icon,
    toast,
    showCancelButton,
    buttonsStyling: false,
    customClass: {
      actions: '!justify-end',
      confirmButton: `${buttonClass} bg-blue-700 hover:bg-blue-800 focus:ring-blue-300`,
      cancelButton: `${buttonClass} bg-red-700 hover:bg-red-800 focus:ring-red-300`,
    },
  });
};

interface SwalProps {
  html?: string;
  title?: string;
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  toast?: boolean;
  showCancelButton?: boolean;
}
