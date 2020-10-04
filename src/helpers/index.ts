export const numberFormat = (value: any, style: string, digits: number) => {
  if (style === 'decimal') {
    value = (Math.floor(value * Math.pow(10, digits)) / Math.pow(10, digits)).toFixed(digits)
  }

  return new Intl.NumberFormat('pt-BR', {
    style: style,
    currency: 'BRL',
  }).format(value);
}
