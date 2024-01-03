export const formatIP = (ip: string) => {
  return ip.replace(/[^\d.]/g, '');
};
