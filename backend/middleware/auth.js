export const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const base64 = authHeader.split(" ")[1];
  const decoded = Buffer.from(base64, "base64").toString();
  const [user, pass] = decoded.split(":");

  console.log("Header:", authHeader);
  console.log("Expected:", process.env.BASIC_USER, process.env.BASIC_PASS);
  console.log("Decoded:", user, pass);

  if (user === process.env.BASIC_USER && pass === process.env.BASIC_PASS) {
    return next();
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
