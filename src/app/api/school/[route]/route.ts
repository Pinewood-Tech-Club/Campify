export async function POST(request: Request, props: { params: Promise<{ route: string }> }) {
  const params = await props.params;
  switch (params.route) {
  }

  return new Response(
    JSON.stringify({
      questions: "!!!",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}

export async function GET(request: Request, props: { params: Promise<{ route: string }> }) {
  const params = await props.params;
  switch (params.route) {
    case "userData": {
    }
  }
}
