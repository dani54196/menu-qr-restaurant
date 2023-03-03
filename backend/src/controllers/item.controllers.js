import Item from "../models/item.model.js";

const itemController = {};

itemController.getAllItems = async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
};

itemController.getItem = async (req, res) => {
  const { item_id } = req.params;
  const item = await Item.findOne({ where: item_id });
  res.status(200).json(item);
};

itemController.createtItem = async (req, res) => {
  const { name, description, price, img_url, avaible, restaurantId } = req.body;
  const item = await Item.create({
    name,
    description,
    price,
    img_url,
    avaible,
    restaurantId,
  });
  res.json(item);
};

itemController.deleteItem = async (req, res) => {
  Item.destroy({ where: { id: req.params.id } });
  res.json({ msg: "item delete" });
};

itemController.updateItem = async (req, res) => {
  const { name, description, price, img_url, avaible, restaurantId } = req.body;
  Item.update(
    { name, description, price, img_url, avaible, restaurantId },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.json({ msg: "item update" });
};

export default itemController;
