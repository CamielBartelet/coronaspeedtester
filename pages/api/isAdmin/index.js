import { getSessionWhenAdmin } from "../../../lib/role";

export default async (req, res) => {
  const session = await getSessionWhenAdmin(req);

  return res.json({
    success: true,
    hasRole: session !== undefined,
  });
};
