import { ChangeEvent } from 'react';
import { formatCurrency, removeCurrencyMaskAndConvertToNumber } from '../utils';

interface InputValue {
  masked: string;
  value: string | number;
}
interface InputProps {
  label: string;
  onChange: (name: string, data: InputValue) => void;
  mask?: 'monetary';
  name: string;
  placeholder: string;
  value: InputValue;
}

const adjustCursor = (
  cursorPosition: number | null,
  inputElement: EventTarget & HTMLInputElement,
  newString: string,
  oldString: string,
) => {
  setTimeout(() => {
    if (cursorPosition === null) {
      return;
    }

    const deltaNewOldLength = newString.length - oldString.length;
    const cursorOffsetFixed = cursorPosition + deltaNewOldLength;
    const offset = deltaNewOldLength > 0 ? -1 : 1;

    inputElement.setSelectionRange(cursorOffsetFixed + offset, cursorOffsetFixed + offset);
  }, 0);
};

const applyMonetaryMask = (valueInput: string): InputValue => {
  const numericValueInput = removeCurrencyMaskAndConvertToNumber(valueInput) / 100;
  const maskedValue = formatCurrency(numericValueInput);
  const numericValueFinal = removeCurrencyMaskAndConvertToNumber(maskedValue) / 100;

  return {
    value: numericValueFinal,
    masked: maskedValue,
  };
};

export const Input = ({ onChange, mask = undefined, value, label, name, placeholder }: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>, oldString: string) => {
    const inputElement = event.target;
    const cursorPosition = inputElement.selectionStart;
    const nameInput = event.target.name;
    const valueInput = event.target.value;

    let newValue: InputValue = {
      value: valueInput,
      masked: valueInput,
    };

    if (mask === 'monetary') {
      newValue = applyMonetaryMask(valueInput);
    }

    onChange(nameInput, newValue);
    adjustCursor(cursorPosition, inputElement, newValue.masked, oldString);
  };

  return (
    <label htmlFor={name} className="flex gap-4 text-gray-700">
      {label}
      <input
        type="text"
        value={value.masked}
        name={name}
        onChange={(event) => {
          handleChange(event, value.masked);
        }}
        placeholder={placeholder}
      />
    </label>
  );
};
