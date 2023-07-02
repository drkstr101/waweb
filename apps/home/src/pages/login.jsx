import Head from "next/head";
import Link from "next/link";

import { AuthLayout } from "@home/components/AuthLayout";
import { TextField } from "@home/components/Fields";
import { Logo } from "@home/components/Logo";
import { Button } from "@watheia/waweb.base-ui";

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-neutral-900">Sign in to your account</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Don’t have an account?{" "}
              <Link href="/register" className="text-primary-600 font-medium hover:underline">
                Sign up
              </Link>{" "}
              for a free trial.
            </p>
          </div>
        </div>
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <div>
            <Button type="submit" variant="solid" color="primary" className="w-full">
              <span>
                Sign in <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}
