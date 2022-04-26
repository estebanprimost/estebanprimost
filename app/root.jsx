import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import baseStyles from "./tailwind.css";
import styles from './styles.css';

export const links = () => [
  { rel: "stylesheet", href: baseStyles },
  { rel: "stylesheet", href: styles },
];

export const meta = () => ({
  charset: "utf-8",
  title: "Esteban Primost",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
