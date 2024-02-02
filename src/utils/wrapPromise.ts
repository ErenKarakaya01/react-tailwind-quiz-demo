type Status = 'pending' | 'success' | 'error';

interface WrapPromiseResult<T> {
  read: () => T;
}

function wrapPromise<T>(promise: Promise<T>): WrapPromiseResult<T> {
  let status: Status = 'pending';
  let response: T | undefined;

  const suspender = promise.then(
    res => {
      status = 'success';
      response = res;
    },
    err => {
      status = 'error';
      response = err;
    },
  );

  const handler: Record<Status, () => T> = {
    pending: () => {
      throw suspender;
    },
    error: () => {
      throw response;
    },
    success: () => response as T,
  };

  const read = () => {
    const result = handler[status] ? handler[status]() : handler.success();
    return result;
  };

  return { read };
}

export default wrapPromise;
