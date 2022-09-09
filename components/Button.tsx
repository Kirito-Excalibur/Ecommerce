/** @jsx h */
import { h } from "preact"
import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "twind";
export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={tw`px-2 py-1 border(gray-100 2) hover:bg-gray-200`}
    />
  );
}
