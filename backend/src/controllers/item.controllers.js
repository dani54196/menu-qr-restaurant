import Item from "../models/item.model.js";

const itemController = {};

itemController.getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

itemController.getItem = async (req, res) => {
  try {
    const item = await Item.findOne({ where: req.params.item_id });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

itemController.createtItem = async (req, res) => {
  try {
    const { name, description, price, img_url, avaible, restaurantId } =
      req.body;
    const item = await Item.create({
      name,
      description,
      price,
      img_url,
      avaible,
      restaurantId,
    });
    res.json(item);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

itemController.deleteItem = async (req, res) => {
  try {
    Item.destroy({ where: { id: req.params.id } });
    res.json({ msg: "item delete" });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

itemController.updateItem = async (req, res) => {
  try {
    const { name, description, price, img_url, avaible, restaurantId } =
      req.body;
    Item.update(
      { name, description, price, img_url, avaible, restaurantId },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json({ msg: "item update" });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

export default itemController;
