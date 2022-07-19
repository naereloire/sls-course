async function createAuction(event) {
  const body = JSON.parse(event.body);
  const now = new Date();

  const auction = {
    title: body?.title ?? '',
    status: 'OPEN',
    createdAt: now.toISOString(),
  };

  console.log(event.body);

  return {
    statusCode: 201,
    body: JSON.stringify({ auction }),
  };
}
export const handler = createAuction;
