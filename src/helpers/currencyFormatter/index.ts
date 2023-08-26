export default function (value: string | number | undefined) {
  if (!value) return 0;
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
