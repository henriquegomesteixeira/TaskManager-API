export async function json(req, res) {
  const buffers = [];

  // Faz a leitura dos dados da requisição e armazena em um array de buffers.
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }
}
