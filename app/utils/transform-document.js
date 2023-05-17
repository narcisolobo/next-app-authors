export function transformDocument(document) {
  console.log(document);
  const obj = document.toObject();
  obj._id = obj._id.toString();
  obj.creator._id = obj.creator._id.toString();
  obj.createdAt = obj.createdAt.toISOString();
  obj.updatedAt = obj.updatedAt.toISOString();
  return obj;
}

export function transformEmptyDocument(document) {
  console.log(document);
  const obj = document.toObject();
  obj._id = obj._id.toString();
  obj.creator = obj.creator.toString();
  obj.createdAt = obj.createdAt.toISOString();
  obj.updatedAt = obj.updatedAt.toISOString();
  return obj;
}
