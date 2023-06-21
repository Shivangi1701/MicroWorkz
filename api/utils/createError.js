const createError = (status, message) => {
  const err = new Error();
  err.status = status; // sending custom status & message to error middleware in server.js
  err.message = message;

  return err;
};
export default createError;
