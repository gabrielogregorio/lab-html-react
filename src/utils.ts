export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export const removeCurrencyMaskAndConvertToNumber = (content: string): number => {
  return parseFloat(content.replace(/[\D]/g, '')) || 0;
};
