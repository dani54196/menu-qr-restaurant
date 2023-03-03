import Item from "../models/item.model.js"
const itemsControllers = {};

itemsControllers.getAllItems = async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
};

itemsControllers.getItem = async (req, res) => {
  const { item_id } = req.params;
  const item = await Items.findOne({ where: item_id });
  res.status(200).json(item);
};

itemsControllers.createRestaurntItem = async (req, res) => {
  const { name, description, location, logo_url, qr_url, items } = req.body;
  await Item.create({
    name,
    description,
    location,
    logo_url,
    qr_url,
    items,
  });
  res.json({ msg: "Create Item" });
};
export default itemsControllers;
