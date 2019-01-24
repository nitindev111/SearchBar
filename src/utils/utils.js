export const searchForResults = (query, list = []) => {
  if (query.length && query.length < 3) {
    return [];
  }
  const LCaseQuery = query.toLowerCase()
  return list.filter(item => {
    return (
      item.id.toLowerCase().includes(LCaseQuery) ||
      item.name.toLowerCase().includes(LCaseQuery) ||
      item.address.toLowerCase().includes(LCaseQuery) ||
      item.pincode.toLowerCase().includes(LCaseQuery)
    );
  });
};
