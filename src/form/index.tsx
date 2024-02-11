import { useState } from 'react';
import { Input } from './input';
import { IScreenProps } from '../types';
import { Layout } from '../layout';

export const Form = ({ setCurrentScreen }: IScreenProps) => {
  const [form, setForm] = useState({
    name: { masked: '', value: '' },
    email: { masked: '', value: '' },
    password: { masked: '', value: '' },
    income: { masked: '', value: 0 },
  });

  const handleChange = (
    name: string,
    newValue: {
      masked: string;
      value: number | string;
    },
  ) => {
    setForm((prev) => {
      return {
        ...prev,
        [name]: newValue,
      };
    });
  };
  return (
    <Layout setCurrentScreen={setCurrentScreen} className="flex items-center justify-center flex-col gap-4">
      <div className="w-full">
        <pre>{JSON.stringify(form, undefined, 4)}</pre>
        <div className="mt-8 flex flex-col gap-4">
          <Input name="name" label="name" placeholder="name here" value={form.name} onChange={handleChange} />

          <Input name="email" label="email" placeholder="email here" value={form.email} onChange={handleChange} />

          <Input
            name="income"
            mask="monetary"
            label="income"
            placeholder="income here"
            value={form.income}
            onChange={handleChange}
          />

          <Input
            name="password"
            label="password"
            placeholder="password here"
            value={form.password}
            onChange={handleChange}
          />
        </div>
      </div>
    </Layout>
  );
};
