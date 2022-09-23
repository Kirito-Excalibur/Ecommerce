import { Head } from "$fresh/src/runtime/head.ts";
import { AppProps } from "$fresh/server.ts";
import { asset } from "https://deno.land/x/fresh@1.1.0/src/runtime/utils.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("/global.css")} />
        <title>Nikhil's Shop</title>
      </Head>
      <props.Component />
    </>
  );
}
