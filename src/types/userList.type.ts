export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export type UserListState = {
  status: 'pending' | 'loading' | 'succeeded' | 'failed';
  users: User[];
};
