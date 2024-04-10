import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";

interface IModelContext {
  model: string;
  setModel: Dispatch<SetStateAction<string>>;
}

export const ModelContext = createContext<IModelContext>({} as IModelContext);

type IModelProps = {
  children: JSX.Element;
}

export const ModelProvider: React.FC<IModelProps> = ({ children }) => {
  const [model, setModel] = useState<string>('');

  return (
    <ModelContext.Provider
      value={{ model, setModel }}
    >
      {children}
    </ModelContext.Provider>
  )
}
