import { Metadata } from "next";

import Link from "next/link";
import { Command } from "lucide-react";
import { UserLoginForm } from "@/components/login";
import AuthButton from "@/components/auth-button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Autenticação",
  description:
    "Autenticação utilizando Shadcs-ui Next-Auth (Authjs), prisma e Nextjs 13.4+",
};

export default async function Register() {
  return (
    <div className="container relative py-48 md:py-0 h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:flex lg:flex-row lg:px-0">
      <AuthButton btn="login" />
      <div className="relative hidden h-full flex-col  p-10 text-white dark:border-r lg:flex">
        <Image src="/hero.png" alt="praia de maragogi" width={750} height={500} />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Entrar</h1>
            <p className="text-sm text-muted-foreground">
              Entre com seus dados de Login
            </p>
          </div>
          <UserLoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}