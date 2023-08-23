const normalizeItem = async (item, userId) => {
  if (!item.image) {
    item.image = {};
  }
  item.image = {
    url:
      item.image.url ||
      "https://cdn.pixabay.com/photo/2020/04/07/17/01/chicks-5014152_960_720.jpg",
    alt: item.image.alt || "yellow fluffy chickens",
  };
  return {
    ...item,
    user_id: item.user_id || userId,
  };
};

module.exports = normalizeItem;
