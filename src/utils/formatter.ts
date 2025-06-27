export function formatDateHours(
  date: string | Date,
  t: (key: string) => string
): string {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = String(d.getFullYear()).slice(-2);
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${t("common.at")} ${hours}:${minutes}`;
}
export function formatCep(cep: string): string {
  const digits = cep.replace(/\D/g, "");

  if (digits.length <= 5) {
    return digits;
  }

  return `${digits.substring(0, 5)}-${digits.substring(5, 8)}`;
}
