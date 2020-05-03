export async function extractData(res: Response) {
  const json = await res.json()
  return json
}
