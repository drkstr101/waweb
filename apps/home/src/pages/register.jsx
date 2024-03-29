import Head from "next/head";
import { Link } from "@watheia/waweb.base-ui";

import { AuthLayout } from "@home/components/AuthLayout";
import { SelectField, TextField } from "@home/components/Fields";
import { Logo } from "@home/components/Logo";
import { Button } from "@watheia/waweb.base-ui";

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-neutral-900">Get started for free</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Already registered?{" "}
              <Link href="/login" className="text-primary-600 font-medium hover:underline">
                Sign in
              </Link>{" "}
              to your account.
            </p>
          </div>
        </div>
        <form action="#" className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <SelectField
            className="col-span-full"
            label="How did you hear about us?"
            id="referral_source"
            name="referral_source"
          >
            <option>AltaVista search</option>
            <option>Super Bowl commercial</option>
            <option>Our route 34 city bus ad</option>
            <option>The “Never Use This” podcast</option>
          </SelectField>
          <div className="col-span-full">
            <Button type="submit" variant="solid" color="primary" className="w-full">
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}
