export type CreateUser = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export type FormError = {
  name: { error: boolean; message: string };
  email: { error: boolean; message: string };
  password: { error: boolean; message: string };
  passwordConfirm: { error: boolean; message: string };
};