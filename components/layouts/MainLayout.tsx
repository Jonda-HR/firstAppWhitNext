import { FC, PropsWithChildren } from "react";
import { Navbar } from "../../components/Navbar";
import Head from "next/head";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>About - Jonathan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main">{children}</main>
    </>
  );
};