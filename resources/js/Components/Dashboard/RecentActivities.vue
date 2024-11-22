<script setup lang="ts">
type Activity = {
  id: number;
  title: string;
  date: string;
  type: 'event' | 'meeting' | 'announcement' | 'deadline';
};

const getTypeColor = (type: Activity['type']): string => {
  switch (type) {
    case 'event':
      return 'green';
    case 'meeting':
      return 'blue';
    case 'announcement':
      return 'yellow';
    case 'deadline':
      return 'red';
    default:
      return 'gray';
  }
};
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">Recent Activities</h2>
    <div class="overflow-x-auto">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Date
            </th>
            <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm" colspan="3">
              <p class="text-gray-500 text-center">No activities to display</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> 