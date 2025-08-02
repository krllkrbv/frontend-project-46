import _ from 'lodash'

const comparision = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const diff = keys.map((key) => {
    if (!Object.prototype.hasOwnProperty.call(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!Object.prototype.hasOwnProperty.call(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key]) && !Array.isArray(data1[key]) && !Array.isArray(data2[key])) {
      return { key, type: 'nested', children: buildTree(data1[key], data2[key]) };
    }
    if (data1[key] !== data2[key]) {
      return {
        key,
        type: 'changed',
        oldValue: data1[key],
        newValue: data2[key],
      };
    }
    return { key, type: 'unchanged', value: data1[key] };
  });
  return diff;
};

export default comparision;
