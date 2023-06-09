export interface User {
  name: string;
  email: string;
  phone: string;
}

export type UserListState = {
  status: 'pending' | 'loading' | 'succeeded' | 'failed';
  users: User[];
  error: string | undefined;
};
