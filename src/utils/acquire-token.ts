const token = {
  accessToken: "PASTE_TOKEN_HERE",
};

export const acquireToken = (): Promise<typeof token> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(token);
    }, 1000);
  });
