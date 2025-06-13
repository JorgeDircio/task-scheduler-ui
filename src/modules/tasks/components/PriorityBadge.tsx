const colorMap: Record<'alta'|'media'|'baja', string> = {
  alta:  'bg-red-100 text-red-800',
  media: 'bg-yellow-100 text-yellow-800',
  baja:  'bg-gray-100 text-gray-800',
};

interface Props { priority: 'alta'|'media'|'baja' }

export const PriorityBadge: React.FC<Props> = ({ priority }) => (
  <span
    className={`px-2 py-0.5 text-xs font-medium rounded-full ${colorMap[priority]} uppercase`}
  >
    {priority}
  </span>
);
