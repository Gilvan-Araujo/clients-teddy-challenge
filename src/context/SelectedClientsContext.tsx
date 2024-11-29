import { createContext, useContext, useState } from 'react';

import { Client } from '@components/Pagination';

interface SelectedClientsContextData {
  selectedClients: Client[];
  addClient: (client: Client) => void;
  removeClient: (clientId: number) => void;
  clearClients: () => void;
  isClientSelected: (clientId: number) => boolean;
}

const SelectedClientsContext = createContext<SelectedClientsContextData>(
  {} as SelectedClientsContextData,
);

export const useSelectedClients = () => {
  const context = useContext(SelectedClientsContext);
  if (!context) {
    throw new Error(
      'useSelectedClients must be used within a SelectedClientsProvider',
    );
  }
  return context;
};

export const SelectedClientsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedClients, setSelectedClients] = useState<Client[]>([]);

  const addClient = (client: Client) => {
    setSelectedClients((prev) => [...prev, client]);
  };

  const removeClient = (clientId: number) => {
    setSelectedClients((prev) =>
      prev.filter((client) => client.id !== clientId),
    );
  };

  const clearClients = () => {
    setSelectedClients([]);
  };

  const isClientSelected = (clientId: number) => {
    return selectedClients.some((client) => client.id === clientId);
  };

  return (
    <SelectedClientsContext.Provider
      value={{
        selectedClients,
        addClient,
        removeClient,
        clearClients,
        isClientSelected,
      }}
    >
      {children}
    </SelectedClientsContext.Provider>
  );
};

export default SelectedClientsProvider;
