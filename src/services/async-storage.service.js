export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  store,
};

function query(entityType, filterBy) {
  var entities = JSON.parse(localStorage.getItem(entityType, filterBy)) || [];
  return Promise.resolve(entities);
}

function store(key, value) {
  localStorage[key] = JSON.stringify(value);
}

// function load(key, defaultValue = null) {
//   var value = localStorage[key] || defaultValue;
//   return Promise.resolve(JSON.parse(value));
// }

function get(entityType, entityId) {
  return query(entityType).then((entities) =>
    entities.find((entity) => entity._id === entityId)
  );
}

function post(entityType, newEntity) {
  newEntity._id = _makeId();
  return query(entityType).then((entities) => {
    entities.push(newEntity);
    _save(entityType, entities);
    return newEntity;
  });
}

function postMany(entityType, newEntities) {
  return query(entityType).then((entities) => {
    newEntities = newEntities.map((entity) => ({ ...entity, _id: _makeId() }));
    entities.push(...newEntities);
    _save(entityType, entities);
    return entities;
  });
}

function put(entityType, updatedEntity) {
  console.log('entityType', entityType);
  return query(entityType).then((entities) => {
    console.log('entities', entities);

    const idx = entities.findIndex(
      (entity) => entity._id === updatedEntity._id
    );
    entities.splice(idx, 1, updatedEntity);
    _save(entityType, entities);
    return updatedEntity;
  });
}

function remove(entityType, entityId) {
  console.log('entityId', entityId);
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId);
    entities.splice(idx, 1);
    _save(entityType, entities);
  });
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function _makeId(length = 5) {
  console.log('hi');
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  console.log('text', text);
  return text;
}
