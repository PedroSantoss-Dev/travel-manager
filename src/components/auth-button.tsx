"use client";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function AuthButton({ btn }: { btn: string }) {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <>
      {!isAuthenticated ? (
        <Link
          href={btn === "register" ? "/login" : "register"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8 rounded-full bg-slate-900 text-white w-24"
          )}
        >
          {btn === "register" ? "Login" : "Criar Conta"}
        </Link>
      ) : (
        <Button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Sair
        </Button>
      )}
    </>
  );
}