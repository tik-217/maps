export function removeActiveBackground(e: React.MouseEvent<HTMLAnchorElement>) {
  const tbody = document.querySelectorAll(".ant-table-tbody");
  tbody[0].childNodes.forEach(
    (el) => ((el as HTMLElement).style.background = "#fff")
  );

  const rowParent = ((e.target as HTMLAnchorElement).parentNode as HTMLElement)
    .parentNode as HTMLTableRowElement;

  rowParent.style.background = "#ade3ff";
}