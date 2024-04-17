import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Suraj Pithva",
    email: "surajpithva5101@gmail.com",
  },
});
export default UserContext;
