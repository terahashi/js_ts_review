//問12 union型

export function run() {
  function formatId(id: number | string): string {
    return `ID: ${id}`;
  }

  console.log(formatId(123));
  console.log(formatId('abc'));
}
