import { ReactNode, createContext, useContext, useState } from 'react';

type IErrorControlContext = {
  openModalError: () => void;
  closeModalError: () => void;
  showModalError: boolean;
};

type IErrorControlProviderProps = {
  children: ReactNode;
};
const ErrorControlContext = createContext({} as IErrorControlContext);

export const ErrorControlProvider: React.FC<IErrorControlProviderProps> = ({
  children,
}) => {
  const [showModalError, setShowModalError] = useState<boolean>(false);

  const openModalError = () => {
    setShowModalError(true);
  };

  const closeModalError = () => {
    setShowModalError(false);
  };

  return (
    <ErrorControlContext.Provider
      value={{ openModalError, closeModalError, showModalError }}
    >
      {children}
    </ErrorControlContext.Provider>
  );
};

export const useErrorControlContext = () => {
  const errorContext = useContext(ErrorControlContext);

  return errorContext;
};
