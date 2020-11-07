export default {
  async send(event: any, data = {}) {
    /* eslint-disable no-unreachable */
    return fetch(`http://or-ambumdt/${event}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    });
  },
};
