metadata = {
  endpoint: 'holdings-storage/holdings'
};

const action = (record) => {
  record.discoverySuppress = true;
  return record;
}

module.exports = { metadata, action };