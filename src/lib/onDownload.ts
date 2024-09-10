export const onDownload = (value: string, display?: string) => () => {
  const link = document.createElement('a');
  link.download = display ?? value;
  link.href = value;
  link.click();
};
