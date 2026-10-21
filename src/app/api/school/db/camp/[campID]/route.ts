import { sql } from "@/internal/core";
import { Camp } from "@/interfaces/util/Camp";

export async function POST(request: Request, props: { params: Promise<{ campID: string }> }) {
  const params = await props.params;
  const dbResult = await sql<Camp[]>`
    SELECT id, likes, comments, description, name, image, tags
    FROM camp
    WHERE id = ${params.campID}
  `;
  let tmp = dbResult[0];
  tmp.tags = tmp.tags.toString().replace("[", "").replace("]", "").split(",");
  return Response.json(tmp);
}
