import { NextResponse } from "next/server";

const AIRTABLE_BASE_ID = "appd1wTStPNASBYJz";
const AIRTABLE_TABLE_ID = "tblsyDmyNRgy6udy4";

const LINKS = {
  cargo: {
    client: "Car Go Autómosó & Kozmetika",
    target: "/",
  },
};

export async function GET(request, { params }) {
  const { slug } = await params;
  const link = LINKS[slug];

  if (!link) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const apiKey = process.env.AIRTABLE_API_KEY;
  if (apiKey) {
    try {
      await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Label: slug,
              Client: link.client,
              "Target URL": new URL(link.target, request.url).toString(),
              "Viewed At": new Date().toISOString(),
              "User Agent": request.headers.get("user-agent") ?? "",
            },
          }),
        }
      );
    } catch {
      // logging failure never blocks the redirect
    }
  }

  return NextResponse.redirect(new URL(link.target, request.url));
}
