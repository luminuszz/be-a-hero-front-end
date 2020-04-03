const token = sessionStorage.getItem('token');
const tokenRecieve = () => {
  if (!token) {
    return false;
  }
  return true;
};
export default tokenRecieve;
