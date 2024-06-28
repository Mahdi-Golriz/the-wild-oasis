import { useQuery } from "@tanstack/react-query";
import { getCurrectUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrectUser,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
