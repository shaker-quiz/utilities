type CheckinResponse = {
  email: UserTable['email']
  first_name: UserTable['first_name']
  id: UserTable['id']
  last_name: UserTable['last_name']
  phone: UserTable['phone']
  third_name: UserTable['third_name']
  role: RoleResponse
}
