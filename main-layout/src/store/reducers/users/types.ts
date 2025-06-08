export interface UserI {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserSliceI {
  user: UserI | null;
}
