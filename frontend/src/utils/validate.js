export const validateUser = (data) => {
  const errors = {};

  if (!data.name || data.name.trim() === "") {
    errors.name = "Name is required";
  }

  if (!data.email || !data.email.includes("@")) {
    errors.email = "Valid email required";
  }

  if (!data.role || data.role.trim() === "") {
    errors.role = "Role is required";
  }

  return errors;
};
