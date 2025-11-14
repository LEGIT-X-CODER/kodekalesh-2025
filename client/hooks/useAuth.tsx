import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";

type Role = "admin" | "user" | null;

type AuthContextValue = {
  user: { uid: string; email?: string | null; displayName?: string | null } | null;
  role: Role;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthContextValue["user"]>(null);
  const [role, setRole] = useState<Role>(null);

  useEffect(() => {
    let unsub: () => void = () => {};
    import("firebase/auth").then(({ onAuthStateChanged }) => {
      unsub = onAuthStateChanged(auth, (u) => {
        if (u) {
          setUser({ uid: u.uid, email: u.email, displayName: u.displayName });
        } else {
          setUser(null);
        }
      });
    });
    return () => unsub && unsub();
  }, []);

  useEffect(() => {
    const admins = (import.meta.env.VITE_ADMIN_EMAILS ?? "").split(",").map((e) => e.trim()).filter(Boolean);
    const email = user?.email ?? "";
    setRole(email && admins.includes(email) ? "admin" : user ? "user" : null);
  }, [user]);

  const signInWithGoogle = async () => {
    const { signInWithPopup } = await import("firebase/auth");
    await signInWithPopup(auth, googleProvider);
  };

  const signInWithEmail = async (email: string, password: string) => {
    const { signInWithEmailAndPassword } = await import("firebase/auth");
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    const { signOut } = await import("firebase/auth");
    await signOut(auth);
  };

  const value = useMemo(() => ({ user, role, signInWithGoogle, signInWithEmail, logout }), [user, role]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
