
export const formatDate = (dateString) => {
  if (!dateString) return "—";
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const makeStatusColor = (status, options) => {
  const opt = options.find((o) => o.value === status);
  return opt ? opt.color : "bg-gray-100 text-gray-800";
};
