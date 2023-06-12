import Swal from 'sweetalert2';
import type { SweetAlertOptions } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const MySwal = withReactContent(Swal);

const buttonClass =
  'focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2';

// Util function for sweetAlert with custom design
export const swalAlert = (swalOptions: SweetAlertOptions) => {
  return MySwal.fire({
    ...swalOptions,
    buttonsStyling: false,
    customClass: {
      actions: '!justify-end',
      confirmButton: `${buttonClass} bg-blue-700 hover:bg-blue-800 focus:ring-blue-300`,
      cancelButton: `${buttonClass} bg-red-700 hover:bg-red-800 focus:ring-red-300`,
    },
  });
};
