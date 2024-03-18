import { ReactNode, createContext, useContext, useMemo, useState } from "react";

type FormData = {
  [key: string]: string | number;
}

interface FormContextType {
  formData: FormData;
  steps: number;
  setSteps: (updatedStep: number) => void;
  updateFormData: (updatedData: FormData) => void;
}

const FormContext = createContext<Partial<FormContextType>>({});

export const useFormContext = () => {
  return useContext(FormContext) as FormContextType;
};

type TFormProvideProps = {
  children: ReactNode;
}

export const FormProvider = ({ children }: TFormProvideProps) => {
  const [formData, setFormData] = useState<FormData>({});
  const [ steps, setSteps ] = useState(1)

  const updateFormData = (updatedData: FormData) => {
    setFormData((prevData) => ({ ...prevData, ...updatedData }));
  };

  const value = useMemo(() => ({ updateFormData, formData, steps, setSteps }), [formData,steps]);

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};
