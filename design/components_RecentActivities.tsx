export default function RecentActivities() {
  const activities = [
    { id: 1, title: 'Science Fair Registration Open', date: '2023-05-15', type: 'event' },
    { id: 2, title: 'Parent-Teacher Conference', date: '2023-05-20', type: 'meeting' },
    { id: 3, title: 'End of Year Exams Schedule Posted', date: '2023-05-22', type: 'announcement' },
    { id: 4, title: 'Summer School Registration Deadline', date: '2023-05-25', type: 'deadline' },
    { id: 5, title: 'School Play Auditions', date: '2023-05-28', type: 'event' },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Title
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{activity.title}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{activity.date}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className={`relative inline-block px-3 py-1 font-semibold text-${getTypeColor(activity.type)}-900 leading-tight`}>
                    <span aria-hidden className={`absolute inset-0 bg-${getTypeColor(activity.type)}-200 opacity-50 rounded-full`}></span>
                    <span className="relative">{activity.type}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function getTypeColor(type: string) {
  switch (type) {
    case 'event':
      return 'green'
    case 'meeting':
      return 'blue'
    case 'announcement':
      return 'yellow'
    case 'deadline':
      return 'red'
    default:
      return 'gray'
  }
}

