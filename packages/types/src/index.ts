export type Role = 'guardian' | 'worker' | 'member';
export type Identity = 'bee' | 'ant';

export interface User {
  id: string;
  email: string;
  display_name: string;
  role: Role;
  identity: Identity;
  created_at: string;
}
