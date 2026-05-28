import { Bounce, ToastContainer } from 'react-toastify';
import { Fragment } from 'react/jsx-runtime';

type MessagesContainerProps = {
  children: React.ReactNode;
};

export function MessagesContainer({ children }: MessagesContainerProps) {
  return (
    <Fragment>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Fragment>
  );
}
