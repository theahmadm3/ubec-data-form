export type TestUser = {
    email: string;
    password: string;
    userType: 'individual' | 'group';
    roleId?: string;
}


export const testUsers: TestUser[] = [
  {
    email: 'individual@mail.com',
    password: 'password',
    userType: 'individual',
  },
  {
    email: 'group@mail.com',
    password: 'password',
    userType: 'group',
    roleId: 'sports_coordinator',
  }
];
