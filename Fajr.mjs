export default async () => {
const BIN_ID = process.env.JSONBIN_BIN_ID;
const ACCESS_KEY = process.env.JSONBIN_ACCESS_KEY;

if (!BIN_ID || !ACCESS_KEY) {
return new Response(
JSON.stringify({ error: "Missing configuration" }),
{
status: 500,
headers: { "Content-Type": "application/json" }
}
);
}

const response = await fetch(
https://api.jsonbin.io/v3/b/${BIN_ID}/latest?meta=false,
{
headers: {
"X-Access-Key": ACCESS_KEY
}
}
);

if (!response.ok) {
return new Response(
JSON.stringify({ error: "Could not read prayer time" }),
{
status: response.status,
headers: { "Content-Type": "application/json" }
}
);
}

const data = await response.json();

return new Response(JSON.stringify(data), {
status: 200,
headers: {
"Content-Type": "application/json",
"Cache-Control": "no-store"
}
});
};

export const config = {
path: "/api/fajr"
};