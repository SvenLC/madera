export type User = {
  firstname: string;
  lastname: string;
  password: string;
  type: UserType;
  createdAt: Date;
  updatedAt: Date;
};

type UserType = {
  name: string;
  roles: Role[];
};

type Role = {
  name: string;
  permissions: Permission[];
};

type Permission = {
  role: Role;
  name: string;
  description: string;
};
