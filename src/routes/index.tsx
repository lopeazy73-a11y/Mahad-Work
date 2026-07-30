import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahad Work — Independent Design & Creative Studio" },
      {
        name: "description",
        content:
          "Mahad Work is an independent studio crafting high-converting brands, digital products, and modern web experiences.",
      },
      { property: "og:title", content: "Mahad Work — Independent Design & Creative Studio" },
      {
        property: "og:description",
        content:
          "Mahad Work is an independent studio crafting high-converting brands, digital products, and modern web experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/lumora.html"
      title="Mahad Work — Independent Design & Engineering Studio"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
